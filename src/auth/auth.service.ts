import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CatsRepository } from './../cats/cats.repository';
import { LoginRequestDto } from './dto/login.request.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly catsRepository: CatsRepository,
    private jwtService: JwtService,
  ) {}

  async jwtLogIn(data: LoginRequestDto) {
    const { email, password } = data;
    // 해당 이메일 있는지?
    const cat = await this.catsRepository.findCatByEmail(email);

    if (!cat) {
      throw new UnauthorizedException('이메일과 비번 확인');
    }

    //password 일치하는지?
    const isPasswordValidated: boolean = await bcrypt.compare(
      password,
      cat.password,
    );
    if (!isPasswordValidated) {
      throw new UnauthorizedException('이메일 비번 확인');
    }

    const payload = { email: email, sub: cat.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
