from concurrent import futures
import logging
import json
import time
import requests

logger = logging.getLogger(__name__)

requests_number = 10000
url = 'http://127.0.0.1:37353/execute'

auth_data = [f'"print({i})"' for i in range(requests_number)]

def peticiones(peticion):
    resp = requests.post(url=url,data=peticion)
    print(resp.text)

def hilos():
    with futures.ThreadPoolExecutor(max_workers=100) as ex:
        ex.map(peticiones,auth_data)

if __name__ == '__main__':
    hilos()
