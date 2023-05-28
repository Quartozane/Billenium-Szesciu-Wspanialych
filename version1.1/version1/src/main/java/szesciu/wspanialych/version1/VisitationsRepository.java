package szesciu.wspanialych.version1;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
@Repository
public interface VisitationsRepository extends MongoRepository<Visitations, ObjectId> {
    boolean existsById(ObjectId id);
    List<Visitations> findByAppointmentDate(LocalDateTime appointmentDate);
    List<Visitations> findByDate(LocalDateTime date);
    List<Visitations> findByVisitStatus(boolean visitStatus);
    List<Visitations> findAll();
}

