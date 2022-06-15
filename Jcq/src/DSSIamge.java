import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class DSSIamge {

    public static void main(String[] args) {
        File file = new File("D:\\PhotoQualityDataset\\HighQuality\\animal\\17099.jpg");

        try {
            FileInputStream in = new FileInputStream(file);

            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            String url = "jdbc:sqlserver://localhost:1433;databasename=EveryArt";
            String username = "sa";
            String password = "123456";
            Connection conn = DriverManager.getConnection(url, username, password);
            PreparedStatement stmt = null;
            String sql = "INSERT INTO Image(image,name,artister,descrition) VALUES (?, ?, ?, ?)";
            stmt = conn.prepareStatement(sql);
            stmt.setBlob(1, in);
            stmt.setString(2, "ceshi");
            stmt.setString(3, "戴珊珊");
            stmt.setString(4, "图片描述");
            stmt.executeUpdate();
            System.out.println("成功插入");
        } catch (ClassNotFoundException e1) {
            // TODO Auto-generated catch block
            e1.printStackTrace();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (FileNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }

}
