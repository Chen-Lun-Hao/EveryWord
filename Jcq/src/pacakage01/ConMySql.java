package pacakage01;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class ConMySql {
    public static void main(String[] args) {
        // InsrtPicToDB();
        Row();
    }

    public static void Row() {
        // 连接数据库
        Connection conn = null;
        PreparedStatement pst = null;
        ResultSet rs = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            // 获取数据库的连接对象 Connection
            conn = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/photoweb?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC",
                    "root", "558177856789chen");

            // 定义SQL语句,插入,全部插入photo表中
            String sql = "select * from photo";

            // 执行SQL语句,Statement对象
            pst = conn.prepareStatement(sql);
            rs = pst.executeQuery();

            // 创建变量存取个数
            int count = 0;
            while (rs.next()) {
                count += 1;
            }

            System.out.println(count);

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

    public static void InsrtPicToDB() {

        // 连接数据库
        Connection conn = null;
        PreparedStatement pst = null;

        // CREATE TABLE `photo2` (
        // id INT PRIMARY KEY AUTO_INCREMENT,
        // `name` VARCHAR(255) DEFAULT NULL,
        // `photo` BLOB
        // ) ENGINE=INNODB DEFAULT CHARSET=utf8;

        try {
            // 注册驱动
            Class.forName("com.mysql.cj.jdbc.Driver");

            // 获取数据库的连接对象 Connection
            conn = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/photoweb?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC",
                    "root", "558177856789chen");

            // 定义SQL语句,插入,全部插入photo表中
            String sql = "insert into photo(name,photo,id,type,quality,belong) values (?,?,?,?,?,?)";

            // 照片所在文件的路径
            String filepath = "D:\\PhotoQualityDataset\\HighQuality\\animal";
            File file = new File(filepath);
            String[] filelist = file.list();

            // 执行SQL语句,Statement对象
            pst = conn.prepareStatement(sql);

            int m = 1500;// 1400;// 1300;// 1200;//1100;// 1000;// 900;// 800;// 700;// 600;// 500;//
                         // 400;//
                         // 300;//
                         // 200;// 100;// 0;
            System.out.println(filelist.length);
            for (int i = 0; i < 100; i++) {// 循环遍历文件的目录，只保存前100条
                File reaFile = new File(filepath + "\\" + filelist[i]);
                FileInputStream fis = new FileInputStream(reaFile);
                String photoName = "";
                // 保存文件名当做一个字段的值
                photoName = filelist[i].substring(0, 6);
                photoName = filelist[i];
                pst.setString(1, photoName);
                pst.setBinaryStream(2, fis, (int) reaFile.length());
                pst.setString(3, String.valueOf(m + 1));
                pst.setString(4, "animal");
                pst.setString(5, "high");
                pst.setString(6, "root");
                m++;
                int n = pst.executeUpdate();
                System.out.println(n + "条记录已经插入");
            }
            System.out.println("本次一共导入" + m + "条");

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } finally {
            // 释放资源
            try {
                if (pst != null) {
                    pst.close();
                }
                if (conn != null) {
                    conn.close();
                }
                System.out.println("数据库关闭");
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

}
