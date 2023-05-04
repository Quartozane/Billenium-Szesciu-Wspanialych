package szesciu.wspanialych.version1;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<User, Integer> {
    boolean existsById(Integer id);
    List<User> findByUserType(String userType);
    List<User> findByNameAndSurname(String name, String surname);
    List<User> findByDateOfBirth(LocalDate dateOfBirth);
    List<User> findByPesel(Integer pesel);
    User findByMailAndPassword(String mail, String password);
    List<User> findAll();
}
