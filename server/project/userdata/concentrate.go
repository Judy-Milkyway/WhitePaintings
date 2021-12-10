package userdata

import (
	"html"
	"net/http"

	"github.com/gin-gonic/gin"
	//"main.go/passportv2"
	//"main.go/token"
)

/*专注计划交互函数*/

//新建专注计划
func CreateConsentratePlan(c *gin.Context) {
	name, exist := c.GetPostForm("name")
	if !exist || name == "" {
		c.JSON(http.StatusOK, gin.H{
			"code": "221",
			"msg":  "没有输入计划名",
		})
		return
	}

	name = html.EscapeString(name)

	startTime, exist := c.GetPostForm("start")
	if !exist || startTime == "" {
		c.JSON(http.StatusOK, gin.H{
			"code": "222",
			"msg":  "没有输入起始时间",
		})
		return
	}

	stopTime, exist := c.GetPostForm("stop")
	if !exist || stopTime == "" {
		c.JSON(http.StatusOK, gin.H{
			"code": "223",
			"msg":  "没有输入结束时间",
		})
		return
	}
}

/*专注数据交互函数*/

//上传专注数据,POST请求
func RecordConsentrateRecord(c *gin.Context) {
	c.GetPostForm("")
}

//获得开始专注的消息,POST请求
func StartConsentraterRecord(c *gin.Context) {

}
