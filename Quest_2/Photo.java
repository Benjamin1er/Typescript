
public class Photo {
    private String url;
    private String filename;
    private Number width;
    private Number height;

    public Photo (String url, String filename, Number width, Number height) {
        this.url = url;
        this.filename = filename;
        this.width = width;
        this.height = height;
    }
    public String getUrl() {return url;}
    public void setUrl(String url) {this.url = url;}
    public String getFilename() {return filename;}
    public void setFilename(String filename) {this.filename = filename;}
    public Number getwidth() {return width;}
    public void setwidth(Number width) {this.width = width;}
    public Number getHeight() {return height;}
    public void setHeight(Number height) {this.height = height;}

}