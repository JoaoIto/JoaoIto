interface IUser {
  name: string;
  age: number;
  code: string[];
  dev: (coffee: string, music: string) => string;
}

class User implements IUser {
  public name: string;
  public age: number;
  public code: string[];
  public dev: (coffee: string, music: string) => string;

  constructor(name: string, age: number, code: string[], dev: (coffee: string, music: string) => string) {
    this.name = name;
    this.age = age;
    this.code = code;
    this.dev = dev;
  }
}

const user = new User('Joao', 17, ['JavaScript', 'TypeScript', 'Java', 'Python'], (coffee: string, music: string) => {
  return `Coding with ${coffee} and ${music}!`;
});
