package szesciu.wspanialych.version1.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor

public class DoctorCardAndDoctor {
    private User userDoctor;
    private DoctorCard doctorCard;
}
