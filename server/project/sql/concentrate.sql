CREATE TABLE IF NOT EXISTS `concentrate`(
    `data_id` INT UNSIGNED AUTO_INCREMENT,
    `timesub` TIMESTAMP NOT NULL,
    PRIMARY KEY (`data_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `commuity`(
    `data_id` INT UNSIGNED AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `content` VARCHAR(192) NOT NULL,
    `pic_url` VARCHAR(192) ,
    `submit_time`  DATETIME NOT NULL,
    PRIMARY KEY (`data_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;