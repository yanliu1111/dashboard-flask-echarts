import time
import pymysql
import traceback
import os
from dotenv import load_dotenv
load_dotenv()

# get the current time
def get_time():
    time_str = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
    return time_str

# get the connection to the database
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

# search all the data from the database
def query(sql,*args):
    """
    :param sql:
    :param args:
    :return:
    """
    conn,cursor = get_conn()
    cursor.execute(sql,args)
    res = cursor.fetchall()
    close_conn(conn,cursor)
    return res

# test the connection
def test():
    sql = "select * from details"
    res = query(sql)
    return res[0] # return the first row

# get the data for center1 pattern
def get_c1_data():
    sql = "select sum(confirm)," \
          "(select suspect from history order by ds desc limit 1)," \
          "sum(heal),sum(dead) from details " \
          "where update_time=(select update_time from details order by update_time desc limit 1) "
    res = query(sql)
    return res[0]

def get_c2_data():
    sql = "select province,sum(confirm) from details " \
          "where update_time=(select update_time from details " \
          "order by update_time desc limit 1) " \
          "group by province"
    res = query(sql)
    return res

def get_l1_data():
    sql = "select ds,confirm,suspect,heal,dead from history"
    res = query(sql)
    return res

def get_l2_data():
    sql = "select ds,confirm_add,suspect_add from history"
    res = query(sql)
    return res

if __name__ == "__main__":
    print(get_l1_data())