package szesciu.wspanialych.version1.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import szesciu.wspanialych.version1.Model.DoctorCard;

import java.util.List;

@Repository
public interface DoctorCardRepository extends MongoRepository<DoctorCard, Integer> {
//    boolean existsById(Integer id);
//    List<Doctor_card> findBySpecialization(String specialization);
//    List<Doctor_card> findByPesel(Integer pesel);
//    List<Doctor_card> findByDateOfBirth(LocalDate dateOfBirth);
      List<DoctorCard> findAll();
}

