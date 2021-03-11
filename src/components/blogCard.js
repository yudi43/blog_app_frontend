import React from "react";
import Button from "@material-ui/core/Button";
import { render } from "react-dom";
import Container from "./Container";
import axios from "axios";
const BlogCard = ({
  title,
  content,
  showEdit,
  timestamp,
  imageUrl,
  username,
  blogid,
}) => {
  // const editFunction = () => {
  //   //blogid, title, content, pictureid, username
  //   const blogData = {
  //     blogid,
  //     title,
  //     content,
  //     pictureid: imageUrl,
  //     username: username,
  //   };
  //   axios
  //     .post(`https://ppagolb.herokuapp.com/blogs/updateBlog`, blogData)
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res.data);
  //     });
  // };
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };
  const triggerText = "Edit";
  let editButton;
  if (showEdit) {
    editButton = (
      <Container
        type="update"
        triggerText={triggerText}
        onSubmit={onSubmit}
        username={username}
        blogid={blogid}
      />
    );
  }
  return (
    <>
      <div
        style={{
          padding: "20px",
          margin: "20px",
          width: "50%",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          transition: "0.3s",
          width: "600px",
          height: "450px",
        }}
      >
        <img src={imageUrl} width="600px" height="200"></img>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h3
            style={{
              paddingLeft: "10px",
            }}
          >
            {title}
          </h3>
          <h4>{timestamp}</h4>
          <h4
            style={{
              paddingRight: "10px",
            }}
          >
            {editButton}
          </h4>
        </div>
        <div>
          <p
            style={{
              flex: "50%",
              paddingLeft: "10px",
            }}
          >
            {content}
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
