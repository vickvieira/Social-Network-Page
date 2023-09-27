// PostProvider.js

import { createContext, useContext, useState, useEffect } from "react";
import { fetchPosts } from "../API/api"; // Importe a função fetchPosts

const PostContext = createContext();

export function usePostContext() {
  return useContext(PostContext);
}

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);

  // Use useEffect para buscar as postagens iniciais
  useEffect(() => {
    fetchPosts()
      .then((allPosts) => {
        setPosts(allPosts);
      })
      .catch((error) => {
        console.error("Erro ao buscar posts:", error);
      });
  }, []); // Certifique-se de passar um array vazio como dependência

  const addPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  const deletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  const editPost = (postId, updatedPostData) => {
    // Encontre o post com base no postId
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        // Atualize os campos do post com os novos dados
        return {
          ...post,
          ...updatedPostData,
        };
      }
      return post;
    });

    // Defina o estado dos posts atualizado
    setPosts(updatedPosts);
  };

  return (
    <PostContext.Provider value={{ posts, addPost, deletePost, editPost }}>
      {children}
    </PostContext.Provider>
  );
}
