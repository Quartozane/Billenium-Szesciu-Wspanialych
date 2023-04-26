package szesciu.wspanialych.version1;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.time.LocalDate;

@Document("User")
@Data
@AllArgsConstructor
public class User {
    @Id
    private Integer id;
    private String user_type;
    private String email;
    private String password;
    private String name;
    private String surname;
    private Integer phone_number;
    private LocalDate date_of_brith;
    private String Address;
    private Integer Pesel;

}
