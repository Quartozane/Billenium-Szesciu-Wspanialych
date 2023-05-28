package szesciu.wspanialych.version1;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.DocumentReference;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface PatientCardRepository extends MongoRepository<PatientCard, String> {
    List<PatientCard> findByUsedMedications(List<String> usedMedications);
    boolean existsById(ObjectId id);
    ObjectId findByUser_Id(ObjectId id);
    List<PatientCard> findAll();
}