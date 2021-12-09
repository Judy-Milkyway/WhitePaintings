package userdata

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func UploadUserAvatar(c *gin.Context) {
	//单张图片上传
	file, _ := c.FormFile("file")
	name := c.PostForm("user_id")

	//filename := file.Filename
	filename := name + ".png"
	if err := c.SaveUploadedFile(file, "/Users/zh/Avatar/"+filename); err != nil {
		log.Print("userinfo.go" + err.Error() + "\n")
		c.JSON(http.StatusOK, gin.H{
			"code": "500",
			"msg":  "上传失败",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"code": "200",
		"msg":  "上传成功",
	})
}
