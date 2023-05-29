package szesciu.wspanialych.version1;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
@Repository
public interface Tests_Repository extends MongoRepository<Tests, Integer> {
    boolean existsById(Integer id);
    List<Tests> findByDateOfTest(LocalDateTime dateOfTest);
}