package szesciu.wspanialych.version1.Repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import szesciu.wspanialych.version1.Model.PatientCard;

@Repository
public interface PatientCardRepository extends MongoRepository<PatientCard, ObjectId> {
    //List<PatientCard> findByUsedMedications(List<String> usedMedications);
//    boolean existsById(ObjectId id);
//    ObjectId findByUser_Id(ObjectId id);
//    List<PatientCard> findAll();
}