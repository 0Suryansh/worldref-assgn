import Header from "@/app/components/header/Header";
import React from "react";
import styles from './page.module.css'

interface Blog {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
  const getBlogById = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/2`, {
      cache: "force-cache"
    });
    const data = await res.json();
    return data as Blog;
  };
  


const BlogPage = async () => {

    const data = await getBlogById()

    console.log(data,"data")

    const paragraphs = Array.from({ length: 20 }, (_, index) => (
        <p key={index}>{data.body}</p>
      ));
    
    return (
        <>
            <Header />
            <div className={styles.blogWrapper}>
                <img className={styles.image} src={`https://picsum.photos/id/${2*20}/200/300`} alt="main-image" />
                <h2 className={styles.blogTitle}>{data.title}</h2>
                {paragraphs}
            </div>
        </>
    )
}

export default BlogPage