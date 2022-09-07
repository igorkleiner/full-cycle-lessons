FROM golang:1.18-alpine as base

WORKDIR /app
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o logger main.go

FROM scratch
COPY --from=base /app/logger .

ENTRYPOINT [ "./logger" ]

