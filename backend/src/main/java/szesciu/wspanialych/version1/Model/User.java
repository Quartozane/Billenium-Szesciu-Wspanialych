package szesciu.wspanialych.version1.Model;

import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDate;
import java.util.List;

@Document(collection = "User")
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class User {
    @Field("_id")
    @Id
    private ObjectId id;
    private String userType;
    private String mail;
    private String password;
    private String name;
    private String surname;
    private Integer phoneNumber;
    private LocalDate dateOfBirth;
    private String address;
    private Long pesel;

    public User(String name, String surname, String mail, String password) {
        this.name = name;
        this.surname = surname;
        this.mail = mail;
        this.password = password;
    }
}
