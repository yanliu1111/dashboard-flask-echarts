import time
import json
import requests


url = "https://view.inews.qq.com/g2/getOnsInfo?name=disease_other"
headers = {
    "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
    }
r = requests.get(url, headers)
res = json.loads(r.text)
data_all = json.loads(res["data"])
print(data_all.keys())