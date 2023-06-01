package szesciu.wspanialych.version1.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Document("PatientCard")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PatientCard {
    @Id
    @Field("_id")
    private ObjectId id;
    private ObjectId patientId;
    private List<String> medications;
    private String conditions;
    private String allergies;
    private String EWUSStatus;
    private String OSOZCard;
    private String NFZDepartment;
    private String activePackage;

    public PatientCard(ObjectId patientId, List<String> medications, String conditions, String allergies, String EWUSStatus, String OSOZCard, String NFZDepartment, String activePackage) {
        this.patientId = patientId;
        this.medications = medications;
        this.conditions = conditions;
        this.allergies = allergies;
        this.EWUSStatus = EWUSStatus;
        this.OSOZCard = OSOZCard;
        this.NFZDepartment = NFZDepartment;
        this.activePackage = activePackage;
    }
}
