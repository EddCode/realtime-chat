FROM golang:1.12-alpine

RUN apk update && apk add --no-cache git

WORKDIR /usr/app

COPY go.mod go.sum ./

RUN go mod download

COPY . .

EXPOSE 5000

# Install CompileDaemon which is used for hot reload each time a file is changed
RUN go get github.com/githubnemo/CompileDaemon

# ENTRYPOINT ["CompileDaemon", "-log-prefix=false", "-build='go build .'", "-command='./realtime-chat'"]
ENTRYPOINT ["go", "run", "main.go"]
