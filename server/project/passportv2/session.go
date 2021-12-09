package passportv2

import (
	"fmt"
	"log"

	tsgutils "github.com/typa01/go-utils"

	"github.com/garyburd/redigo/redis"
)

func NewUserSession(id string) (string, error) {

	c, err := DialRedis()
	if err != nil {
		return "", err
	}
	defer c.Close()

	session := tsgutils.GUID()
	expireTime := 24 * 60 * 60

	_, err = c.Do("SET", "session", id, "EX", expireTime)
	if err != nil {
		log.Print("redis set failed:", err)
	}

	return session, nil
}

func VerifyUserSession(session string) (bool, error) {

	c, err := DialRedis()
	if err != nil {
		return false, err
	}
	defer c.Close()

	exist, err := redis.Bool(c.Do("EXISTS", "session"))
	if err != nil {
		log.Print("redis query failed:", err)
		return false, err
	}

	if exist {
		return true, nil
	}
	return false, nil
}

func ResetSessionTime(session string) error {

	c, err := DialRedis()
	if err != nil {
		return err
	}
	defer c.Close()

	n, err := c.Do("EXPIRE", session, 24*60*60)
	if n == int64(1) {
		fmt.Print("success")
		return nil
	}
	return err
}

//暂时的方案
func ExpireSession(session string) error {

	c, err := DialRedis()
	if err != nil {
		return err
	}
	defer c.Close()

	n, err := c.Do("EXPIRE", session, 0.01)
	if n == int64(1) {
		fmt.Print("success")
		return nil
	}
	return err
}
