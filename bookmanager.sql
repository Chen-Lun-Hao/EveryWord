/*
 Navicat Premium Data Transfer

 Source Server         : master
 Source Server Type    : MySQL
 Source Server Version : 50720
 Source Host           : localhost:3306
 Source Schema         : bookmanager

 Target Server Type    : MySQL
 Target Server Version : 50720
 File Encoding         : 65001

 Date: 29/09/2020 16:36:18
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for book
-- ----------------------------
DROP TABLE IF EXISTS `book`;
CREATE TABLE `book`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `book_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type_id` int(11) NULL DEFAULT NULL,
  `author` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `publish` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` double(10, 2) NULL DEFAULT NULL,
  `number` int(11) NULL DEFAULT NULL,
  `status` int(11) NULL DEFAULT 1 COMMENT '状态 1上架0下架',
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of book
-- ----------------------------
INSERT INTO `book` VALUES (4, '西游记', 3, '吴承恩', '机械工业出版社', 23.00, 213, 1, '四大名著之一');
INSERT INTO `book` VALUES (6, 'SpringCloud微服务架构开发', 1, '黑马程序员', '人民邮电出版社', 28.00, 20, 1, '微服务实战开发');
INSERT INTO `book` VALUES (7, '水浒传', 3, '施耐庵 ', '人民文学出版社', 29.00, 30, 1, '四大名著之一');
INSERT INTO `book` VALUES (8, 'Java基础入门（第2版）', 1, '黑马程序员', '清华大学出版社', 30.20, 22, 1, '提高Java编程功底必备');
INSERT INTO `book` VALUES (9, '中国文学编年史', 2, '陈文新', '湖南人民出版社', 35.30, 36, 1, '中国文学编年史');
INSERT INTO `book` VALUES (10, 'JavaWeb程序设计任务教程', 1, '黑马程序员', '人民邮电出版社', 25.50, 16, 1, '学习JavaWeb的好帮手');
INSERT INTO `book` VALUES (11, 'SSH框架整合实战教程', 1, '传智播客高教产品研发部', '清华大学出版社', 59.00, 12, 1, 'SSH项目开发实战');
INSERT INTO `book` VALUES (12, '朝花夕拾', 3, '鲁迅', '辽海出版社', 44.60, 30, 1, '鲁迅小说全集系列');
INSERT INTO `book` VALUES (13, '彷徨', 3, '鲁迅', '辽海出版社', 44.60, 16, 1, '鲁迅小说全集系列');
INSERT INTO `book` VALUES (14, '呐喊', 3, '鲁迅', '辽海出版社', 44.50, 16, 1, '鲁迅小说全集系列');
INSERT INTO `book` VALUES (15, '阿Q正传', 3, '鲁迅', '辽海出版社', 29.00, 33, 1, '鲁迅小说全集系列');

-- ----------------------------
-- Table structure for book_type
-- ----------------------------
DROP TABLE IF EXISTS `book_type`;
CREATE TABLE `book_type`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of book_type
-- ----------------------------
INSERT INTO `book_type` VALUES (1, '技术', '技术类');
INSERT INTO `book_type` VALUES (2, '人文', '人文类');
INSERT INTO `book_type` VALUES (3, '小说', '人生情感小说');

-- ----------------------------
-- Table structure for borrowdetail
-- ----------------------------
DROP TABLE IF EXISTS `borrowdetail`;
CREATE TABLE `borrowdetail`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `status` int(11) NOT NULL COMMENT '状态  1在借2已还',
  `borrow_time` bigint(20) NULL DEFAULT NULL,
  `return_time` bigint(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 27 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of borrowdetail
-- ----------------------------
INSERT INTO `borrowdetail` VALUES (1, 1, 2, 2, 1546414916391, 1546414948498);
INSERT INTO `borrowdetail` VALUES (2, 1, 3, 2, 1546414932877, 1556417443285);
INSERT INTO `borrowdetail` VALUES (3, 1, 2, 2, 1546416530026, 1546416640210);
INSERT INTO `borrowdetail` VALUES (4, 1, 1, 2, 1546565100120, 1556334334816);
INSERT INTO `borrowdetail` VALUES (5, 1, 4, 1, 1546565102870, NULL);
INSERT INTO `borrowdetail` VALUES (6, 3, 1, 2, 1546565519776, 1556207839074);
INSERT INTO `borrowdetail` VALUES (7, 3, 4, 1, 1546565522374, NULL);
INSERT INTO `borrowdetail` VALUES (8, 1, 1, 1, 1556427836809, NULL);
INSERT INTO `borrowdetail` VALUES (9, 4, 3, 1, 1556433544156, NULL);
INSERT INTO `borrowdetail` VALUES (10, 7, 5, 1, 1556503388763, NULL);
INSERT INTO `borrowdetail` VALUES (11, 8, 5, 2, 1556507260569, 1556507349243);
INSERT INTO `borrowdetail` VALUES (12, 8, 13, 1, 1556507333043, NULL);
INSERT INTO `borrowdetail` VALUES (13, 8, 14, 1, 1556507390633, NULL);
INSERT INTO `borrowdetail` VALUES (14, 5, 4, 2, 1556523317389, 1556523338061);
INSERT INTO `borrowdetail` VALUES (15, 5, 12, 1, 1556523321541, NULL);
INSERT INTO `borrowdetail` VALUES (16, 5, 13, 2, 1556523324149, 1556535561206);
INSERT INTO `borrowdetail` VALUES (17, 5, 10, 1, 1556535626582, NULL);
INSERT INTO `borrowdetail` VALUES (18, 5, 8, 2, 1556535629488, 1556585064182);
INSERT INTO `borrowdetail` VALUES (19, 5, 6, 1, 1556539744896, NULL);
INSERT INTO `borrowdetail` VALUES (20, 1, 5, 1, 1556539946226, NULL);
INSERT INTO `borrowdetail` VALUES (21, 9, 2, 2, 1556583833816, 1556583847518);
INSERT INTO `borrowdetail` VALUES (22, 9, 7, 1, 1556583838018, NULL);
INSERT INTO `borrowdetail` VALUES (23, 5, 14, 1, 1556585092996, NULL);
INSERT INTO `borrowdetail` VALUES (24, 5, 11, 1, 1556585100866, NULL);
INSERT INTO `borrowdetail` VALUES (25, 1, 12, 1, 1556845403233, NULL);
INSERT INTO `borrowdetail` VALUES (26, 11, 2, 2, 1561804768359, 1561804772616);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `role` int(255) NULL DEFAULT NULL COMMENT '角色  1学生 2管理员',
  `sex` varchar(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `phone` char(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'xkj', 'xkj123', 1, '男', '13195648799');
INSERT INTO `user` VALUES (2, 'admin', '111111', 2, '男', '13198645975');
INSERT INTO `user` VALUES (3, '徐某人', 'xkj123', 1, '女', '13195648529');
INSERT INTO `user` VALUES (4, '肖淼', 'sdf78978', 1, '女', '13195698458');
INSERT INTO `user` VALUES (5, '张军伟', 'zjw520', 1, '女', '13195689458');
INSERT INTO `user` VALUES (6, '杨帆', 'dfd757', 1, '女', '15246598568');
INSERT INTO `user` VALUES (7, '九头蛇', 'kkk111', 1, '男', '13194959879');
INSERT INTO `user` VALUES (8, '蔡佳铭', 'cjm7418', 1, '女', '13164649855');
INSERT INTO `user` VALUES (9, '杨飞龙', 'kj12345', 1, '男', '13195864589');
INSERT INTO `user` VALUES (11, 'javaniu', '111111', 1, '男', '13520109203');

SET FOREIGN_KEY_CHECKS = 1;
