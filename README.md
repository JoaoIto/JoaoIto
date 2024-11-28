### 🌟 Hey! Eu sou o João! 😊  

Apaixonado por tecnologia, transformo ideias em código que conecta pessoas e resolve problemas. 🚀  

Atuo como **desenvolvedor fullstack** com foco em **Node.js**, **React.js** e **TypeScript**, criando aplicações robustas e interfaces incríveis.  

Domino **bancos de dados** como **MongoDB**, **PostgreSQL** e **MySQL**, sempre buscando eficiência e escalabilidade.  

Minha jornada como desenvolvedor é guiada pela curiosidade e pelo desafio de aprender e evoluir constantemente.  

Graduando em **Sistemas de Informação** pela **Universidade Estadual do Tocantins**, estou sempre pronto para inovar e entregar soluções que fazem a diferença.  

Desenvolvedor Fullstack Web na Hust App, plataforma de automação e gestão de atendimentos online para empresas. 🚀

---

### 🌟 Hey! I’m João! 😊  

Passionate about technology, I turn ideas into code that connects people and solves problems. 🚀  

As a **fullstack developer**, I specialize in **Node.js**, **React.js**, and **TypeScript**, building robust applications and stunning interfaces.  

I have strong expertise in **databases** like **MongoDB**, **PostgreSQL**, and **MySQL**, always aiming for efficiency and scalability.  

My journey as a developer is driven by curiosity and the constant challenge of learning and evolving.  

An **Information Systems** undergraduate at **Tocantins State University**, I’m always ready to innovate and deliver impactful solutions.  

Fullstack Web Developer at Hust App, an online service automation and management platform for businesses. 🚀

---


 <div>
  <a href="https://github.com/JoaoIto">
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=JoaoIto&show_icons=true&theme=codeSTACKr&include_all_commits=true&count_private=true"/>
  
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=JoaoIto&layout=compact&langs_count=7&theme=codeSTACKr"/>
</div>

 ![Streak](https://streak-stats.demolab.com/?user=JoaoIto&theme=codeSTACKr)

 ## Techs:
    
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
    
 ## Social:
   
  <a href="https://www.instagram.com/joaoitoxd/" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
 	<a href="https://www.twitch.tv/itocabrito" target="_blank"><img src="https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white" target="_blank"></a>
   <a href = "mailto:joaovictorpfr@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-p%C3%B3voa-fran%C3%A7a-97502420b/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
  
    
```tsx
// pages/index.tsx (Next.js)
import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/message')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return <h1>{message}</h1>;
}

// pages/api/message.ts (Next.js API route)
export default function handler(req, res) {
  res.status(200).json({ message: 'João with React + Node.js magic!' });
}

```
