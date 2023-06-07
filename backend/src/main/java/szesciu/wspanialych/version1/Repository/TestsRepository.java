package szesciu.wspanialych.version1.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import szesciu.wspanialych.version1.Model.Tests;

import java.time.LocalDateTime;
import java.util.List;
@Repository
public interface TestsRepository extends MongoRepository<Tests, Integer> {
    boolean existsById(Integer id);
    List<Tests> findByDateOfTest(LocalDateTime dateOfTest);
}