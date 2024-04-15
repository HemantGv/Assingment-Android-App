import React, { useState } from "react";
import { StyleSheet, ProgressBar } from "react-native";
import EmployeeInfo from "./EmployeeInfo";
function Home() {
  function decimalToPercentage(decimal) {
    return (decimal * 100).toFixed(2).replace(/\.0+$/, "") + "%";
  }
  const [navigate, setnavigate] = useState(true);
  const productivityContent = [
    {
      day: "Productivity on Monday",
      percent: 0.32,
    },
    {
      day: "Productivity on Tuesday",
      percent: 0.62,
    },
    {
      day: "Productivity on Wednesday",
      percent: 0.32,
    },
    {
      day: "Productivity on Tursday",
      percent: 0.22,
    },
    {
      day: "Productivity on Friday",
      percent: 0.32,
    },
    {
      day: "Productivity on Saturday",
      percent: 0.92,
    },
  ];

  const employee_details = [
    { emid: 1, name: "ram", dob: "10-12-2001", role: "developer" },
    { emid: 2, name: "arun", dob: "09-11-2002", role: "software engineer" },
    { emid: 3, name: "arjun", dob: "11-10-2000", role: "software engineer" },
  ];

  return (
    <div style={styles.home_main}>
      <div style={styles.home_main_child1}>
        <div style={styles.home_main_child1_icon}>
          <img src="assets/Group 46.png"></img>
        </div>
        <div style={styles.home_main_child1_logo}>
          <div
            style={{
              width: "fit-content",
              height: "fit-content",
              padding: "18px",
              position: "relative",
            }}
          >
            <img src="assets/moptro logo.png"></img>
            <div
              style={{
                borderRadius: "42px",
                position: "absolute",
                backgroundColor: "#5E5E5EB5",
                top: 0,
                padding: "5px 10px 5px 10px",
                height: "fit-contet",
                right: 0,
                border: "1px solid #FFFEFE00",
                color: "#36A546",
                opacity: "0.4",
                fontSize: "18px",
              }}
            >
              4
            </div>
          </div>
        </div>
      </div>
      {navigate ? (
        <div style={styles.home_main_child2}>
          <div style={styles.home_main_child2_information}>
            <div style={styles.home_main_child2_title}>
              <p> Employee Productivity Dashboard</p>
            </div>
            <div style={styles.home_main_child2_information_content}>
              {productivityContent.map((d) => (
                <div style={styles.productivity_content}>
                  <div style={styles.productivity_content_1}>
                    <p style={{ color: "white", fontSize: "14px" }}>{d.day}</p>
                    <span style={{ color: "#36A546", fontSize: "14px" }}>
                      {decimalToPercentage(d.percent)}
                    </span>
                  </div>
                  <div style={styles.productivity_content_2}>
                    <ProgressBar
                      styleAttr="Horizontal"
                      indeterminate={false}
                      progress={d.percent} // Change the progress value as needed
                      color="#36A54680" // Red color for completed portion
                      style={styles.progressBar}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <EmployeeInfo />
        </>
      )}
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "50px",
          borderRadius: "42px",
          backgroundColor: "#0F2323",
          position: "fixed",
          bottom: 0,
          zIndex: "2000",
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "42px",
            backgroundColor: `${navigate == true ? "#232D2D" : "transparent"} `,
          }}
          onClick={() => {
            setnavigate(true);
          }}
        >
          <img
            src="assets/home-1-svgrepo-com.png"
            style={{ height: "25px" }}
          ></img>
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "42px",
            backgroundColor: `${
              navigate == false ? "#232D2D" : "transparent"
            } `,
          }}
          onClick={() => {
            setnavigate(false);
          }}
        >
          <img
            src="assets/user-svgrepo-com.png"
            style={{ height: "25px" }}
          ></img>
        </div>
      </div>
    </div>
  );
}
export default Home;
const styles = StyleSheet.create({
  home_main: {
    width: "100%",
    overflow: "none",
    overflowY: "auto",

    history: "100%",
    backgroundColor: "black",
  },
  home_main_child1: {
    height: "25%",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backgroundColor: "black",
  },
  home_main_child2: {
    height: "auto",
    position: "relative",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  home_main_child1_icon: {
    display: "flex",
    justifyContent: "flex-end",
  },
  home_main_child1_logo: {
    display: "flex",
    justifyContent: "center",
  },
  home_main_child2_information: {
    backgroundColor: "#242323",
    boxShadow: "inset 0px 4px 0px #00000040",
    borderRadius: "20px",
    filter: blur("2px"),
  },
  home_main_child2_title: {
    position: "sticky",
    backgroundColor: "#1A2C2C99",
    top: 0,
    height: "40px",
    borderRadius: "42px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: "80%",
  },
  home_main_child2_information_content: {
    paddingBottom: "40px",
    paddingTop: "40px",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },
  productivity_content: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  productivity_content_1: {
    display: "flex",
    alignItems: "center",
    width: "90%",
    height: "20px",
    justifyContent: "space-between",
  },
  productivity_content_2: {
    display: "flex",
    width: "90%",
    borderRadius: "42px",
    justifyContent: "flex-start",
  },
  progressBar: {
    width: "60%",
    backgroundColor: "#0000FF",
    borderRadius: 5,
    marginTop: 3,
    height: "10px",
    border: "1px solid #36A546",
  },
  employee_details: {
    p: {
      color: "red",
    },
  },
});
