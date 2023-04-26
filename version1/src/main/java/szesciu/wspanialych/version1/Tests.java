package szesciu.wspanialych.version1;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.time.LocalDate;

@Document("Tests")
@Data
@AllArgsConstructor
public class Tests {
    @Id
    private Integer id;
    @DocumentReference
    private User userId;
    @DocumentReference
    private User userType;
    private LocalDate date_of_test;
    private String information;
    private String result_of_test;


}
