import postImage from "../assets/postPicture.png";

export function fetchPosts() {
    const allPosts = [
      {
        id: "1",
        userId: "p3",
        name: "Eduarda Pereira",
        description:
          "Minha última viagem para a Ilha do Comendador, um lugar simplesmente incrível...",
        commentName: "Thiago Oliveira",
        comment: "Adorei o post!",
        image: postImage,
      },
      {
        id: "2",
        userId: "p3",
        name: "Eduarda Pereira",
        description:
          "Descrição do segundo post...",
        commentName: "",
        comment: "",
        image: '',
      },
      {
        id: "3",
        userId: "p4",
        name: "Renato Silva",
        description:
          "Descrição do tercerio post...",
        commentName: "",
        comment: "",
        image: '',
      },
      {
        id: "4",
        userId: "p5",
        name: "Mariana Santos",
        description: "Minha viagem à praia durante as férias de verão.",
        commentName: "João Oliveira",
        comment: "Que lugar incrível!",
        image: postImage,
      },
      {
        id: "5",
        userId: "p3",
        name: "Eduarda Pereira",
        description: "Explorando as montanhas no fim de semana.",
        commentName: "Lucas Mendes",
        comment: "As fotos estão incríveis!",
        image: postImage,
      },
      {
        id: "6",
        userId: "p4",
        name: "Renato Silva",
        description: "Um dia de aventura no parque nacional.",
        commentName: "Isabela Ferreira",
        comment: "Esse lugar é lindo demais!",
        image: postImage,
      },
      {
        id: "7",
        userId: "p6",
        name: "João Oliveira",
        description: "Minha viagem à Europa durante o verão.",
        commentName: "Mariana Santos",
        comment: "Que incrível, João!",
        image: postImage,
      },
      {
        id: "8",
        userId: "p6",
        name: "João Oliveira",
        description: "Explorando as cidades históricas.",
        commentName: "Eduarda Pereira",
        comment: "Estou com inveja das suas fotos!",
        image: postImage,
      },
      {
        id: "9",
        userId: "p7",
        name: "Lucas Mendes",
        description: "Minha experiência de acampamento na natureza.",
        commentName: "Mariana Santos",
        comment: "Isso parece emocionante!",
        image: postImage,
      },
      {
        id: "10",
        userId: "p7",
        name: "Lucas Mendes",
        description: "Caminhada na trilha da floresta tropical.",
        commentName: "Renato Silva",
        comment: "Estou pronto para a próxima aventura!",
        image: postImage,
      },
      {
        id: "11",
        userId: "p8",
        name: "Isabela Ferreira",
        description: "Férias na praia paradisíaca.",
        commentName: "Eduarda Pereira",
        comment: "Estou ansiosa para as minhas férias!",
        image: postImage,
      },
      {
        id: "12",
        userId: "p8",
        name: "Isabela Ferreira",
        description: "Um dia de passeio de bicicleta pela cidade.",
        commentName: "Lucas Mendes",
        comment: "Adoro andar de bicicleta!",
        image: postImage,
      },
    ];
  
    return Promise.resolve(allPosts);
  }
  