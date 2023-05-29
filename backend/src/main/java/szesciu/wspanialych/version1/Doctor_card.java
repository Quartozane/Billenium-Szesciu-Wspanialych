package szesciu.wspanialych.version1;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.time.LocalDate;

@Document("Doctor_card")
@Data
@Getter
@Setter
public class Doctor_card {
    @Id
    private Integer id;
    @DocumentReference
    private User userId;
    private User user;
    private String name;
    private String surname;
    private String specialization;
    private Integer pesel;
    private String address;
    private LocalDate dateOfBirth;
    private String education;
    private String experience;
    private int Price;
}
