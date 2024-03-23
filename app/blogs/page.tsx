import React from "react";
import Header from "../components/header/Header";
import Card from "../components/cards/Cards";
import styles from './page.module.css'

interface Blog {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const getBlogs = async (): Promise< Blog[]  > => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
    cache: "force-cache"
  });
  const data: Blog[] = await res.json();
  return data
};

const Blogs = async () => {

    const blogs = await getBlogs()
  return (
    <>
      <Header />
      <h1 className={styles.blogs__heading}>Blogs</h1>
      <div className={styles.blogs__main}>
        {blogs.map((blog, index) => (
          <Card
            key={blog.id}
            body={blog.body}
            title={blog.title}
            image={`https://picsum.photos/id/${blog.id*20}/200/300`}
            id={blog.id}
            btn={{
              text: "Read More",
              href: "/blogs",
              type: 'secondary',
              filled: true,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Blogs;
