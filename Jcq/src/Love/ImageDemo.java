package Love;

/**
 *
 */

import java.io.FileInputStream;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import java.sql.Blob;

/**
 * @author Administrator 测试写入数据库以及从数据库中读取
 */
public class ImageDemo {

    // 将图片插入数据库
    public static void readImage2DB() {
        String path = "D:/1.png";
        Connection conn = null;
        PreparedStatement ps = null;
        FileInputStream in = null;
        try {
            in = ImageUtil.readImage(path);
            conn = DBUtil.getConn();
            String sql = "insert into photo (id,name,photo)values(?,?,?)";
            ps = conn.prepareStatement(sql);
            ps.setInt(1, 1);
            ps.setString(2, "Tom");
            ps.setBinaryStream(3, in, in.available());
            int count = ps.executeUpdate();
            if (count > 0) {
                System.out.println("插入成功！");
            } else {
                System.out.println("插入失败！");
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            DBUtil.closeConn(conn);
            if (null != ps) {
                try {
                    ps.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }

    }

    // 读取数据库中图片
    public static void readDB2Image() {

        String targetPath = "D:/image/1.jpg";
        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        try {
            conn = DBUtil.getConn();
            String sql = "select * from highphoto where id = 5";
            ps = conn.prepareStatement(sql);
            ps.setInt(1, 1);
            rs = ps.executeQuery();
            byte[] b = new byte[10240 * 10];

            System.out.println(rs.getBlob("photo"));
            while (rs.next()) {
                // 获取photo列中的图片数据
                // rs.getBinaryStream("photo");
                InputStream in = rs.getBinaryStream("photo");

                // 将数据存储在字节数组b中
                // in.read(b);
                // 从数据库中获取图片保存的位置
                ImageUtil.readBin2Image(in, targetPath);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            DBUtil.closeConn(conn);
            if (rs != null) {
                try {
                    rs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if (ps != null) {
                try {
                    ps.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }

        }
    }

    // 测试
    public static void main(String[] args) {
        readImage2DB();
        // readDB2Image();
        System.out.println("保存成功");
    }

    // public void select() {

    // Blob get_image;

    // String sql = "select* from taImage";
    // try {
    // // 将读取到的图片存放到指定的路径中
    // FileOutputStream fileOutputStream = new
    // FileOutputStream("/Users/liuliu/Desktop/bb.jpg");

    // preparedStatement = connection.prepareStatement(sql);

    // ResultSet resultSet = preparedStatement.executeQuery();

    // while (resultSet.next()) {

    // get_image = resultSet.getBlob("photo");
    // // 将读取到的Blob对象转成字节流
    // inputStream = get_image.getBinaryStream();
    // int a;
    // byte b[] = new byte[1014];
    // while ((a = inputStream.read(b)) != -1) {
    // fileOutputStream.write(b, 0, a);
    // }

    // }

    // } catch (SQLException e) {
    // e.printStackTrace();
    // } catch (FileNotFoundException e) {
    // e.printStackTrace();
    // } catch (IOException e) {
    // e.printStackTrace();
    // }

    // }

}
