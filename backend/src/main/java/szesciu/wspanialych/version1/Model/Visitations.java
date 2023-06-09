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
import java.time.LocalTime;
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
    private LocalDateTime appointmentDate;
    private String appointmentDescription;
    private String appointmentStatus;
    private String appointmentPurpose;
    private String symptoms;
    private String medicalTests;
    private String prescribedMedications;
    private String diagnosis;
    private String medicationDosage;


    public Visitations(ObjectId doctorId, ObjectId patientId, LocalDate appointmentBookingDate, LocalDateTime appointmentDate, String appointmentDescription, String appointmentStatus, String appointmentPurpose, String symptoms, String medicalTests, String prescribedMedications, String diagnosis, String medicationDosage) {
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