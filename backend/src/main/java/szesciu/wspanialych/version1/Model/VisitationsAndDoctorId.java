package szesciu.wspanialych.version1.Model;

import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class VisitationsAndDoctorId {
    private Visitations visitation;
    private ObjectId doctorId;
}

