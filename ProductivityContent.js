import React from "react";
import { StyleSheet, ProgressBar } from "react-native";

function ProductivityContent() {
  return (
    <div>
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
      ;
    </div>
  );
}

const styles = StyleSheet.create({
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

export default ProductivityContent;
