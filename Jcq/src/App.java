import java.io.File;

public class App {
    static String filepath = "D:\\PhotoQualityDataset\\HighQuality\\animal";

    public static void main(String[] args) throws Exception {

        File file = new File(filepath);
        String[] fileStrings = file.list();
        System.out.println(fileStrings.length);
        for (int i = 0; i < fileStrings.length; i++) {
            System.out.println(fileStrings[i]);
        }

    }
}
