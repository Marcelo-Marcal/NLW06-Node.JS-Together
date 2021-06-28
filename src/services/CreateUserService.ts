import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean
}

class CreateUserService {
  
  async execute({name, email, admin}: IUserRequest) {
    const usersRepository = new UsersRepositories();
    // Verificar se o email esta prenchido 
    if(!email) {
      throw new Error('Email incorrect!');
    }
    // Verica se o usuario já existe
    const userAlreadyExists = await usersRepository.findOne({
      email,
    });
    // Se o usuario existe
    if (userAlreadyExists) {
      throw new Error('User already exists!');
    }
    // E se não existir criar ele
    const user = usersRepository.create({
      name,
      email,
      admin
    })
    // Salva o usuario criado
    await usersRepository.save(user);
    return user;
  }
}

export { CreateUserService }