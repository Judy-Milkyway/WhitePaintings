package push

import (
	"database/sql"
	"fmt"
	"log"
)

var db *sql.DB

func InitDB() error {
	var err error
	dsn := "root" + ":" + "MysqlTest" + "@tcp(127.0.0.1:3306)/test" //记得修改

	db, err = sql.Open("mysql", dsn)
	if err != nil {
		log.Print(err)
		return err
	} else {
		//检测是否连接成功
		err := db.Ping()
		if err != nil {
			log.Print(err)
			return err
		}
		db.SetMaxOpenConns(10)
		fmt.Print("连接成功\n")
	}
	return nil
}

//查询项目内容
func QueryCommuity(pages int) (map[int]*CommuityInfo, error) {
	var id = 0
	sqlstr := `select MAX(id) from commuity;`
	result := db.QueryRow(sqlstr)
	err := result.Scan(&id)
	if err != nil {
		log.Print(err)
		return nil, err
	}

	queryidlast := id - 10*pages
	queryidfirst := id - 10*(pages+1)

	querydata := make(map[int]*CommuityInfo)
	i := 0
	data := CommuityInfo{}
	sqlstr = `select user_id from commuity where id between ? and ?;`
	results, err := db.Query(sqlstr, queryidfirst, queryidlast)
	if err != nil {
		log.Print(err)
		return nil, err
	}

	for results.Next() {
		results.Scan(&data.user_id)
		querydata[i] = &data
		i++
		if data.user_id == "" {
			return querydata, errNoMoreContents
		}
	}

	i = 0
	sqlstr = `select content from commuity where id between ? and ?;`
	results, err = db.Query(sqlstr, queryidfirst, queryidlast)
	if err != nil {
		log.Print(err)
		return nil, err
	}

	for results.Next() {
		results.Scan(&data.content)
		querydata[i] = &data
		i++
	}

	i = 0
	sqlstr = `select pic_urls from commuity where id between ? and ?;`
	results, err = db.Query(sqlstr, queryidfirst, queryidlast)
	if err != nil {
		log.Print(err)
		return nil, err
	}

	for results.Next() {
		results.Scan(&data.picUrl)
		querydata[i] = &data
		i++
	}

	i = 0
	sqlstr = `select time from commuity where id between ? and ?;`
	results, err = db.Query(sqlstr, queryidfirst, queryidlast)
	if err != nil {
		log.Print(err)
		return nil, err
	}

	for results.Next() {
		results.Scan(&data.submitTime)
		querydata[i] = &data
		i++
	}
	return querydata, nil
}

func AddCommuityInfo(info CommuityInfo) error {
	sqlstr := `insert into community(userid,content,pic_url,time) values(?,?,?,?)`
	_, err := db.Exec(sqlstr, info.user_id, info.content, info.picUrl, info.submitTime)
	if err != nil {
		log.Print("commuity add item failed" + err.Error())
		return err
	}
	return nil
}
