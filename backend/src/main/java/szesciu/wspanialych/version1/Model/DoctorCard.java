package szesciu.wspanialych.version1.Model;

import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDate;

@Document("DoctorCard")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DoctorCard {
    @Id
    @Field("_id")
    private ObjectId id;
    private ObjectId doctorId;
    private String specialization;
    private String education;
    private String experience;
}
