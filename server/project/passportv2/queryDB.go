package passportv2

import "log"

//从数据库查询电子邮件
func QueryEmail(username string) string {
	var email string
	sqlstr := `select email from users where username=?`
	result := db.QueryRow(sqlstr)
	err := result.Scan(email)
	if err != nil {
		log.Print(err)
		return ""
	}
	return email
}

//从数据库查询用户名
func QueryUsername(email string) string {
	var username string
	sqlstr := `select username from users where email=?`
	result := db.QueryRow(sqlstr, email)
	err := result.Scan(username)
	if err != nil {
		log.Print(err)
		return ""
	}
	return username
}

//从数据库查询密码
func QueryPasswd(username string) []byte {
	var passwd []byte
	sqlstr := `select password from users where username=?`
	result := db.QueryRow(sqlstr, username)
	err := result.Scan(&passwd)
	if err != nil {
		log.Print(err)
		return nil
	}
	return []byte(passwd)
}

//从数据库查询盐
func QuerySalt(username string) []byte {
	var salt []byte
	sqlstr := `select salt from users where username=?`
	result := db.QueryRow(sqlstr, username)
	err := result.Scan(&salt)
	if err != nil {
		log.Print(err)
		return nil
	}
	return salt
}
