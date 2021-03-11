import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { logout } from "../actions/session";
import Button from "@material-ui/core/Button";
import BlogCard from "./blogCard";
import Modal from "./Modal";
import Container from "./Container";
import axios from "axios";

const mapStateToProps = ({ session }) => ({
  session,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

const Dashboard = ({ logout, session }) => {
  const [blogs, setblogs] = useState([]);
  console.log(blogs);
  React.useEffect(() => {
    axios
      .get("https://ppagolb.herokuapp.com/blogs/getAllBlogs")
      .then(function (response) {
        console.log(response.data.result);
        setblogs([...blogs, ...response.data.result]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const editPost = () => {};

  const triggerText = "Create Post";
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };
  return (
    <div
      style={{
        width: "600px",
        margin: "auto",
        width: "50%",
      }}
    >
      <div style={{ display: "flex", width: "600px" }}>
        <div>
          <h1>Hi {session.username}!</h1>
        </div>
        <div
          style={{
            width: "150px",
          }}
        ></div>
        <Container
          triggerText={triggerText}
          onSubmit={onSubmit}
          username={session.username}
        />

        <Button onClick={logout}>Logout</Button>
      </div>
      <div>
        {blogs.reverse().map((blog, i) => (
          <BlogCard
            key={i}
            showEdit={session.username == blog.username}
            title={blog.title}
            content={blog.content}
            timestamp={blog.timestamp}
            imageUrl={blog.pictureid}
            username={session.username}
            blogid={blog.blogid}
          />
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
