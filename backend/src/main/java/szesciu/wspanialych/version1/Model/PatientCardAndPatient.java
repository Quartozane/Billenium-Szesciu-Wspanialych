package szesciu.wspanialych.version1.Model;


import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class PatientCardAndPatient {
    private User userPatient;
    private PatientCard patientCard;
}
