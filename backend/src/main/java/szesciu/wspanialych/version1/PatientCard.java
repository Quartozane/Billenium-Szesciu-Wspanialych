package szesciu.wspanialych.version1;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document("PatientCard")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PatientCard {
    @Id
    private ObjectId id;
    @DocumentReference
    private ObjectId user_id;
    private User user;
    private List<String> usedMedications;
    private List<String> diseases;
    private List<String> allergies;
    private String eWUS_status;
    private String OSOZ_card;
    private String NFZ_department;
    private String active_package;
}
