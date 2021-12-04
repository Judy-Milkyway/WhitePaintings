package main

import (
	"github.com/gin-gonic/gin"
	"main.go/passport"
)

func main() {
	err := passport.InitDB()
	if err != nil {
		return
	}

	r := gin.Default()
	//登录页面
	passportPage := r.Group("/")

	passportPage.POST("/login", passport.Login)
	passportPage.POST("/reg", passport.Register)
	//

	//运行数据库
	r.Run(":9000")

}
