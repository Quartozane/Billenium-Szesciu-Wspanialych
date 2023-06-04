package szesciu.wspanialych.version1.Model;

import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.aggregation.DateOperators;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "Visitations")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Visitations {
    @Id
    @Field("_id")
    private ObjectId id;
    private ObjectId doctorId;
    private ObjectId patientId;
    private LocalDate appointmentBookingDate;
    private LocalDate appointmentDate;
    private String appointmentDescription;
    private String appointmentStatus;
    private String appointmentPurpose;
    private List<String> symptoms;
    private List<String> medicalTests;
    private List<String> prescribedMedications;
    private List<String> diagnosis;
    private String medicationDosage;

    public Visitations(ObjectId doctorId, ObjectId patientId, LocalDate appointmentBookingDate, LocalDate appointmentDate, String appointmentDescription, String appointmentStatus, String appointmentPurpose, List<String> symptoms, List<String> medicalTests, List<String> prescribedMedications, List<String> diagnosis, String medicationDosage) {
        this.doctorId = doctorId;
        this.patientId = patientId;
        this.appointmentBookingDate = appointmentBookingDate;
        this.appointmentDate = appointmentDate;
        this.appointmentDescription = appointmentDescription;
        this.appointmentStatus = appointmentStatus;
        this.appointmentPurpose = appointmentPurpose;
        this.symptoms = symptoms;
        this.medicalTests = medicalTests;
        this.prescribedMedications = prescribedMedications;
        this.diagnosis = diagnosis;
        this.medicationDosage = medicationDosage;
    }
}