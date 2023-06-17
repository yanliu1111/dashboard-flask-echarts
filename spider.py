import requests
import time
import pymysql
import traceback
import os
from dotenv import load_dotenv
from selenium.webdriver import Chrome,ChromeOptions

load_dotenv()

def get_conn():
    conn = pymysql.connect(
        host= os.getenv("MYSQL_HOST"),
        user= os.getenv("MYSQL_USER"),
        password= os.getenv("MYSQL_PASSWORD"), 
        db= os.getenv("MYSQL_DATABASE"), 
        charset="utf8")

    cursor = conn.cursor()
    return conn, cursor


def close_conn(conn, cursor):
    if cursor:
        cursor.close()
    if conn:
        conn.close()

# get the hot search data from baidu
def get_baidu_hot():
    option = ChromeOptions()
    option.add_argument("--headless")# hide the browser
    option.add_argument("--no--sandbox")# for linux
    browser =  Chrome(options=option)
    
    url = "https://top.baidu.com/board?tab=realtime&sa=fyb_realtime_31065"
    # res = requests.get(url)
    # print(res.text)
    browser.get(url)
    # print(browser.page_source)
    c = browser.find_elements("xpath", '//*[@id="sanRoot"]/main/div[2]/div/div[2]/div/div[2]/a/div[1]') 
    n = browser.find_elements("xpath", '//*[@id="sanRoot"]/main/div[2]/div/div[2]/div/div[1]/div[2]') 

    # for content, num in zip(c,n):
    #     print(f"{content.text} {num.text}")
    context = [content.text + " " + num.text for content, num in zip(c,n)]
    print("context:", context)

    browser.close()
    return context

def update_hotsearch():
    cursor = None
    conn = None
    try:
        context = get_baidu_hot()
        print(f"{time.asctime()}start update hotsearch data")
        conn,cursor = get_conn()
        sql = "INSERT INTO hotsearch (dt, content) VALUES (%s, %s)"  # Specify both columns
        ts = time.strftime("%Y-%m-%d %X")
        for i in context:
            cursor.execute(sql,(ts,i))
        conn.commit()
        print(f"{time.asctime()}complete update hotsearch data")
    except:
        traceback.print_exc()
    finally:
        close_conn(conn,cursor)

update_hotsearch()


