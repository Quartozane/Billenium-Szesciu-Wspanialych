package szesciu.wspanialych.version1.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.time.LocalDateTime;

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
    private LocalDateTime dateOfTest;
    private String information;
    private String resultOfTest;
}
