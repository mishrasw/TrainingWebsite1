import React from "react";
import ImageSlider from "../ImageSlider"
import { Link } from "react-router-dom";
import BannerImage from "../assets/lightblue1.png";
import "../style/Home.css";
import { TextField } from "@mui/material";
import Square from "../helpers/Square"
import AnimatedTextImage from "../helpers/AnimatedTextImage";
import imgPW from "../assets/pw_framework.png"
import imgSE from "../assets/SeleniumTraining.png"
import imgMob from "../assets/appium.png"
import imgApi from "../assets/rest_assured.png"

const text1=["one", "two", "three"]


//<div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
function Home() {
  return (
<div>
    <div className="home">
    <div className="homeTop">
    </div>
      <div className="homeBottom" style={{ color: 'white' }}>
        <h1> TECHNO-TRAIL </h1>
        <h2>
        Welcome to Techno-Trail : Your Pathway to Test Automation Excellence
        </h2>
        <p>
        At Techno-Trail, we empower software testers with the latest tools and comprehensive training 
        to excel in their careers. Our platform offers a curated selection of top-tier testing tools 
        and expert-led courses designed to enhance your skills and knowledge. Join us to stay ahead 
        in the dynamic world of software testing.
        </p>
        <br />
        <br />
        <h1 style={{ animationDelay: `${.5}s` }}>
        OUR SERVICES
        </h1>
        <br />
        <br />
        <AnimatedTextImage title="Playwrite Automation"
        text={[
        "Playwright is a powerful open-source automation framework developed by Microsoft for end-to-end testing modern web applications.",
        " We provide solutions for creating Playwright automation frameworks, empowering teams to build reliable and efficient end-to-end tests for web applications.",
        "Our expertise ensures seamless integration with Playwright, offering advanced features such as cross-browser testing, parallel execution, and automatic waiting.", 
        "We focus on delivering robust, maintainable automation frameworks tailored to your specific needs, enhancing the quality and performance of your web applications across multiple browsers."
      ]}
        image={imgPW} />
        <br />
        <br />
        <AnimatedTextImage title="Selenium Automation"
        text={[
          "Our expertise in Selenium test automation frameworks ensures that your web applications are rigorously tested across various browsers and platforms, guaranteeing a seamless user experience.",
          "Our frameworks are modular, scalable, and maintainable, ensuring long-term viability and easy updates.",
          "We integrate Selenium tests with your Continuous Integration and Continuous Deployment (CI/CD) pipelines which enables automated testing at every stage of development, ensuring rapid feedback and faster delivery cycles.",
          "We incorporate design techniques like Test Driven Development(TDD) & Behavior-Driven Development (BDD) along with Selenium to create readable and maintainable test scenarios."
        ]}   
        image={imgSE} />
        <br />
        <br />
        <AnimatedTextImage title="Mobile Automation using Appium"
        text={[
          "We are dedicated to delivering state-of-the-art mobile automation solutions that ensure your applications perform flawlessly on any device.",
          "Our team specializes in creating comprehensive mobile automation frameworks using Appium.",
          "These frameworks are designed to handle the complexities of modern mobile applications, providing robust, reliable, and repeatable test scripts.",
          "We conduct testing on both real devices and emulators to provide comprehensive coverage.",
          "We offer continuous improvement and support services to ensure your mobile automation frameworks remain effective and up-to-date with the latest technological advancements and best practices."
        ]}
        image={imgMob} />
        <br />
        <br />
        <AnimatedTextImage title="API Automation RestAssured"
        text={[
          "We are committed to delivering top-tier automation solutions that ensure the robustness and reliability of your APIs.",
          "With a deep understanding of API testing and a strong emphasis on leveraging the power of RestAssured, we help our clients achieve seamless and efficient API validation processes.",
          "Our team excels in developing comprehensive API automation frameworks using RestAssured. These frameworks are designed to provide thorough and reliable testing of RESTful APIs, ensuring your services perform flawlessly under various conditions.",
          "Our frameworks support data-driven and parameterized testing approaches, allowing you to run tests with multiple data sets. This enhances test coverage and helps identify edge cases that could impact your APIs.",
          "We enhance test visibility and insights through detailed reporting solutions. Our frameworks provide comprehensive test execution reports, helping you quickly identify and resolve issues."
        ]}
        image={imgApi} />
      </div>
      <br />
    <br />
    <br />
    <br />
    </div>
    </div>
  );
}

export default Home;
