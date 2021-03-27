package utils

import (
	"log"
	"strings"

	"github.com/google/uuid"
)

func GenerateUuid () string {
    newUuid := uuid.New()
    uid := strings.Replace(newUuid.String(), "-", "", -1)
    return uid
}

func JsonErrorReader()  {
    if recov := recover(); recov != nil {
        log.Print("Some error recoverd", recov)
    }
}

