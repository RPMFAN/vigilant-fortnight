package vigilant.fortnight.repository;

import org.springframework.data.repository.CrudRepository;
import vigilant.fortnight.entity.User;

public interface UserRepository extends CrudRepository<User, Long> {
}
