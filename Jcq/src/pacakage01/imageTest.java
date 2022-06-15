package pacakage01;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.sql.Blob;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class imageTest {
    private String className = "com.mysql.jdbc.Driver";
    private String url = "jdbc:mysql://localhost:3306/dssbighomew";
    private String user = "root";
    private String password = "558177856789chen";
    private Connection conn = null;

    @Before
    public void before() throws Exception {
        Class.forName(className);
        conn = DriverManager.getConnection(url, user, password);
    }

    @After
    public void after() throws Exception {
        conn.close();
    }

    @Test
    public void test2() throws Exception {// 从数据库取出图片成图片
        String sql = "select photo from highphoto where id = 1 and type=human";
        ResultSet rs = conn.createStatement().executeQuery(sql);
        if (rs.next()) {
            Blob pic = rs.getBlob(1);
            InputStream is = pic.getBinaryStream();
            int len = -1;
            byte[] buf = new byte[1024 * 1024 * 50];
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            while ((len = is.read(buf)) != -1) {
                baos.write(buf, 0, len);
            }
            is.close();
            baos.close();
            byte[] bytes = baos.toByteArray();
            File file = new File("D:\\辉夜姬.jpg");
            FileOutputStream fos = new FileOutputStream(file);
            fos.write(bytes);
            fos.close();
        }
    }
}
