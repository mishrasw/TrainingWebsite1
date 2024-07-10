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
import ThreeColumnLayout from "../helpers/ThreeColumnLayout";

const text1=["one", "two", "three"]


//<div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
function SeleniumJava() {
  return (
<div>
    <div className="home">
    <div className="homeTop">
    </div>
      <div className="homeBottom" style={{ color: 'white' }}>
        <h1> WEB AUTOMATION - SELENIUM in JAVA </h1>
        <p>
        Selenium is an open-source tool suite for automating web browsers. 
        It is widely used for web application testing and automating repetitive web tasks.
        It provides an easy and efficient way to automate web application testing, ensuring that applications
         are reliable, robust, and perform as expected. 
        In this tutorial, we will explore the basics of Selenium with Java and its various applications.
        </p>
        <ThreeColumnLayout title1="Selenium Day 1" 
      text1="• What is Automation Testing​<br />
      • Why Test Automation​<br />
      • Challenges in Test Automation?​<br />
      • What to Automate?​<br />
      • Automation Testing Process​<br />
      • Why designing Test Automation Framework?​<br />
      • Factors to choose right Automation Tool​<br />
      • Overview of Selenium​<br />
      • Why Selenium with JAVA​<br />
      • Install JAVA JDK & Eclipse/IntelliJ​<br />
      • Create a simple programme"
      title2="Selenium Day 2"
      text2="Java Basics​​<br />
      • Variables and Data Types​​<br />
      • Operators and Expressions​​<br />
      Control Structures​​<br />
      • If-else, Switch Case​​<br />
      • Loops: for, while, do-while​​<br />
      Object-Oriented Programming (OOP)​​<br />
      • Classes and Objects​​<br />
      • Constructors​​<br />
      • Inheritance, Polymorphism, Encapsulation, Abstraction​​<br />
      Java Collections Framework​​<br />
      • List, Set, Map​​<br />
      • Iterating through Collections​​<br />
      Exception Handling​​<br />
      • Try-catch block​​<br />
      • Throw, Throws, Finally​"
      title3="Selenium Day 3"
      text3="Introduction to WebDriver​​<br />
      • What is WebDriver?​​<br />
      • WebDriver vs Selenium RC​​<br />
      • Setting up WebDriver​​<br />
      • Download and Installation​​<br />
      • Configuring IDE (Eclipse/IntelliJ IDEA)​<br />
      • Setting up Browser Drivers​​<br />
      • WebDriver Commands​​​<br />
      • Browser Commands​​​<br />
      • Navigation Commands​​<br />
      • WebElement Commands"

         ></ThreeColumnLayout>

      </div>
    </div>
    </div>
  );
}

export default SeleniumJava;
