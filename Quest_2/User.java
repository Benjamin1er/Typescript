import java.sql.Date;

public class User {
    private Date birthday;
    private Number size;
    private Photo photo;
    private Address address;

    public User(Date birthday, Number size, Photo photo, Address address) {
        this.birthday = birthday;
        this.size = size;
        this.photo = photo;
        this.address = address;
    }
    public Date getBirthday() {return birthday;}
    public void setBirthday(Date birthday) {this.birthday = birthday;}
    public Number getSize() {return size;}
    public void setSize(Number size) {this.size = size;}
    public Photo getPhoto() {return photo;}
    public void setPhoto(Photo photo) {this.photo = photo;}
    public Address getAddress() {return address;}
    public void setAddress(Address address) {this.address = address;}
}