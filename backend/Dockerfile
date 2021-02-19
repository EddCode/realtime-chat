FROM golang

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY . /usr/app

RUN go get github.com/codegangsta/gin
RUN go-wrapper download
RUN go-wrapper install

EXPOSE 3000

CMD ["gin", "run"]
