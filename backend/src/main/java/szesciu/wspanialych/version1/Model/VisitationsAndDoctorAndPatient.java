package szesciu.wspanialych.version1.Model;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class VisitationsAndDoctorAndPatient {
    private Visitations visitation;
    private User doctor;
    private User patient;
    private String visitationId;
}
