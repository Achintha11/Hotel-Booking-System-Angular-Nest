import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.userService.findOne(loginDto);
    const passwordMatch = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

    if (passwordMatch) {
      delete user.password;
      const payload = { username: user.email, userId: user.id }; // Use userId instead of sub
      const accessToken = this.jwtService.sign(payload);
      console.log('Generated JWT Payload:', payload); // Debugging statement
      console.log('Generated AccessToken:', accessToken); // Debugging statement

      return {
        accessToken,
      };
    } else {
      throw new UnauthorizedException('Invalid Password');
    }
  }
}
