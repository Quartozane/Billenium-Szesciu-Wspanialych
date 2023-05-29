package szesciu.wspanialych.version1;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface Doctor_Card_Repository extends MongoRepository<Doctor_card, Integer> {
    boolean existsById(Integer id);
    List<Doctor_card> findBySpecialization(String specialization);
    List<Doctor_card> findByPesel(Integer pesel);
    List<Doctor_card> findByDateOfBirth(LocalDate dateOfBirth);
}

