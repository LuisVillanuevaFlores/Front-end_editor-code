FROM antsz2526/pythonexecutor:v2

WORKDIR /app

COPY app.py /app
COPY demo.html /app
COPY ./static/ /app/static/
COPY ./templates/index.html /app/templates/
COPY ./static/js/calls.js /app/static/js/

RUN ls -laR /app/*

CMD ["python3", "app.py"]
