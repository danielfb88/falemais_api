import * as faker from "faker";
import { User } from "../../src/models";

export function mockUser(): User {
  return {
    id: faker.random.uuid(),
    password: "123456",
    userName: faker.name.firstName().toLowerCase(),
  };
}
