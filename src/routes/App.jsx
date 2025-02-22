/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import "bootstrap/dist/css/bootstrap.min.css";
import "../routes/App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import CreatePost from "../components/CreatePost";

import PostList from "../components/PostList";
import { useState } from "react";
import PostListProvider from "../store/posts-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet></Outlet>

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
