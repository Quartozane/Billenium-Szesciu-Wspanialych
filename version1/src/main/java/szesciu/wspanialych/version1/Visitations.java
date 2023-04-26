package szesciu.wspanialych.version1;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.cglib.core.Local;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.aggregation.DateOperators;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.time.LocalDate;
import java.util.List;

@Document("Visitations")
@Data
@AllArgsConstructor
public class Visitations {
    @Id
    private Integer id;
    private LocalDate appointment_date;
    private DateOperators.Hour time_of_visit;
    private String description_of_the_visit;
    private boolean visit_status;
    private String target_visit;
    private String symptoms;
    private List<String> referral_for_examination;
    private List<String> prescribed_medication;
    private String diagnosis;
    private String drug_dosage;
    @DocumentReference
    private User userId;
    @DocumentReference
    private User userType;
}
