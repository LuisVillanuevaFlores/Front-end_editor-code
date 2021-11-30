from concurrent import futures
import logging
import json
import time
import requests

logger = logging.getLogger(__name__)

requests_number = 5
count = 0
url = 'http://localhost:5000/execute'

auth_data = [f'"print({i})"' for i in range(requests_number)]

def peticiones(peticion):
    global count
    count +=1
    resp = requests.post(url=url,data=peticion)
    print(resp.text)

t1 =  time.perf_counter()
def hilos():
    with futures.ThreadPoolExecutor(max_workers=5) as ex:
        ex.map(peticiones,auth_data)
t2 = time.perf_counter()

for i in range(1):
    hilos()

print(count)
print(f'time to execute {(t2-t1)/(requests_number*len(auth_data))} seconds')
