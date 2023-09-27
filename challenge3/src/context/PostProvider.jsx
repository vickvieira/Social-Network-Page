import { createContext, useContext, useState, useEffect } from "react";
import { fetchPosts } from "../API/api";

const PostContext = createContext();

export function usePostContext() {
  return useContext(PostContext);
}

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts()
      .then((allPosts) => {
        setPosts(allPosts);
      })
      .catch((error) => {
        console.error("Erro ao buscar posts:", error);
      });
  }, []);

  const addPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  const deletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  const editPost = (postId, updatedPostData) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          ...updatedPostData,
        };
      }
      return post;
    });

    setPosts(updatedPosts);
  };

  return (
    <PostContext.Provider value={{ posts, addPost, deletePost, editPost }}>
      {children}
    </PostContext.Provider>
  );
}
