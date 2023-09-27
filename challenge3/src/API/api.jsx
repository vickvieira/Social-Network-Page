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
    ];
  
    return Promise.resolve(allPosts);
  }
  