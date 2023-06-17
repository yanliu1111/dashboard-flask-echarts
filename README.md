# Dashboard with Flask and ECharts

## Introduction

## Tech Stack

- python 3.10
- Flask
- ECharts
- MySQL
- Heidisql
- selenium
- ChromeDriver
- XPath: `find_elements`

## MySQL Database

- Database name: `history` and `details`

```sql
-- create new table
USE YourDatabaseName;
DROP TABLE IF EXISTS `history`;
CREATE TABLE `history` (
`ds` datetime NOT NULL,
`confirm` int(11) DEFAULT NULL,
`confirm_add` int(11) DEFAULT NULL,
`suspect` int(11) DEFAULT NULL,
`suspect_add` int(11) DEFAULT NULL,
`heal` int(11) DEFAULT NULL,
`heal_add` int(11) DEFAULT NULL,
`dead` int(11) DEFAULT NULL,
`dead_add` int(11) DEFAULT NULL,
PRIMARY KEY (`ds`) USING BTREE
)
ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
;
-- create new table
USE YourDatabaseName;
DROP TABLE IF EXISTS `details`;
CREATE TABLE `details` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`update_time` datetime(0) DEFAULT NULL,
`province` varchar(50) DEFAULT NULL,
`city` varchar(50) DEFAULT NULL,
`confirm` int(11) DEFAULT NULL,
`confirm_add` int(11) DEFAULT NULL,
`heal` int(11) DEFAULT NULL,
`dead` int(11) DEFAULT NULL,
PRIMARY KEY (`id`) USING BTREE
)
ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
;

-- create new table
USE YourDatabaseName;
DROP TABLE IF EXISTS `hotsearch`;
CREATE TABLE `hotsearch`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dt` datetime(0) DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `content` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB DEFAULT CHARSET = UTF8MB4;
```
