import requests
from selenium.webdriver import Chrome,ChromeOptions

url = "https://top.baidu.com/board?tab=realtime&sa=fyb_realtime_31065"
res = requests.get(url)
# print(res.text)

option = ChromeOptions()
option.add_argument("--headless")# hide the browser
option.add_argument("--no--sandbox")# for linux
browser =  Chrome(options=option)

browser.get(url)
# print(browser.page_source)
c = browser.find_elements("xpath", '//*[@id="sanRoot"]/main/div[2]/div/div[2]/div/div[2]/a/div[1]') 
n = browser.find_elements("xpath", '//*[@id="sanRoot"]/main/div[2]/div/div[2]/div/div[1]/div[2]') 

for title, count in zip(c,n):
    print(title.text,count.text)

browser.close()


