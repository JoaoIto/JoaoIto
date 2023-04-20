## Hey!! I am Joao!😊

- **Currently I am coding in JavaScript!** 😉
- **I am front-end developer and I pretend learn more areas in coding world**🌐
- **I study Information System in Estadual Tocantins State University** 🌔
- **I like games, codes, musics, live streams 💥**


 <div>
  <a href="https://github.com/JoaoIto">
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=JoaoIto&show_icons=true&theme=codeSTACKr&include_all_commits=true&count_private=true"/>
  
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=JoaoIto&layout=compact&langs_count=7&theme=codeSTACKr"/>
</div>

 ![Streak](https://streak-stats.demolab.com/?user=JoaoIto&theme=codeSTACKr)
 

![Snake animation](https://github.com/JoaoIto/JoaoIto/blob/output/github-contribution-grid-snake.svg)

 ## Techs:
    
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/npm/types/typescript?label=%7C&logo=typescript&style=for-the-badge)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
    
 ## Social:
   
  <a href="https://www.instagram.com/joaoitoxd/" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
 	<a href="https://www.twitch.tv/itocabrito" target="_blank"><img src="https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white" target="_blank"></a>
   <a href = "mailto:joaovictorpfr@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-p%C3%B3voa-fran%C3%A7a-97502420b/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
  
    
```ts
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
```
