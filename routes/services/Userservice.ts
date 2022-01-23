import {createQueryBuilder, getRepository} from "typeorm";
import {User} from "../../entity/User";

class UserServices {
  private userRepository;

  public index = async () => {
    try {
      return await createQueryBuilder('user').getMany();
    } catch (e) {
      console.log(e);
    }
  }
}

export default UserServices;