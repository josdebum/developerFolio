import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Top from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import { StyleProvider } from '../contexts/StyleContext';
import "./Main.css";
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false
    };
  }

  changeTheme = () => {
    this.setState({ isDark: !this.state.isDark });
  }

  render() {
    return (
      <div className={this.state.isDark ? 'dark-mode' : null} >
        <StyleProvider value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }} >
          <Header />
          <Greeting />
          <Skills />
          <StackProgress />
          <Projects />
          <StartupProject />
          <Achievement />
          <Blogs />
          <Talks />
          <Twitter />
          <Podcast />
          <Contact />
          <Footer />
          <Top />
        </StyleProvider>
        <Greeting />
        <Skills />
        <StackProgress />
        <WorkExperience />
        <Projects />
        <StartupProject />
        <Achievement />
        <Blogs />
        <Talks />
        <Twitter />
        <Podcast />
        <Profile />
        <Footer />
        <Top />
      </div>
    );
  }
}
