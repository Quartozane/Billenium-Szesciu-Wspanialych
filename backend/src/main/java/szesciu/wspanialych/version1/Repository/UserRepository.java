package szesciu.wspanialych.version1.Repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import szesciu.wspanialych.version1.Model.User;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<User, ObjectId> {
//    boolean existsById(ObjectId id);
//    User findByid(ObjectId id);
//    List<User> findByUserType(String userType);
//    List<User> findByNameAndSurname(String name, String surname);
//    List<User> findByDateOfBirth(LocalDate dateOfBirth);
//    List<User> findByPesel(Integer pesel);
    User findByMailAndPassword(String mail, String password);
    User findByIdAndUserType(ObjectId _id, String userType);
    List<User> findAllByUserType(String userType);
//    List<User> findAll();
}
