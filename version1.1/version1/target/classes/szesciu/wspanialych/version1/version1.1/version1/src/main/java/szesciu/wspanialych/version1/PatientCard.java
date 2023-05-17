package szesciu.wspanialych.version1;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document("PatientCard")
@Data
@AllArgsConstructor
public class PatientCard {
    @Id
    private Integer id;
    @DocumentReference
    private Integer user_id;
    private List<String> usedMedications;
    private List<String> diseases;
    private List<String> allergies;
    private String eWUS_status;
    private String OSOZ_card;
    private String NFZ_department;
    private String active_package;
}
