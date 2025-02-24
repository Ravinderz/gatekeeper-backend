import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repository/user.repository';

@Injectable()
export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async getAllUsers(): Promise<any[]> {
    const result = await this.userRepository.getAllUsers();
    return result;
  }

  async getUserById(id: string): Promise<any> {
    const result = await this.userRepository.getUserById(id);
    return result;
  }

  async addUser(user: any): Promise<any> {
    const result = await this.userRepository.addUser(user);
    return result;
  }
}
