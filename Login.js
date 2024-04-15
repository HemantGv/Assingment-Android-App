import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, Modal } from "react-native";
import dataset from "./usersDetails";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  function validate() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /.{8,}/;
    if (!emailRegex.test(email)) {
      alert("Invalid email address");
      return;
    }
    if (!passwordRegex.test(password)) {
      alert("Password must be at least 8 characters long");
      return;
    }
    const user = dataset.filter(
      (d) => email == d.email && password == d.password
    );
    if (user.length == 0) {
      alert("Invalid user credentials!");
    } else {
      sessionStorage.setItem(
        "user",
        JSON.stringify({ email: email, password: password })
      );
    }
  }
  return (
    <div style={styles.container}>
      <div style={styles.login_container1} className="login_container1">
        <img src="assets/Group 3.png"></img>
        <p style={styles.text_color}>we are Electric</p>
      </div>
      <div style={styles.login_container2} className="login_container1">
        <div
          style={{
            width: "100%",
            gap: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            onChange={(e) => {
              setemail(e.target.value);
            }}
            style={{
              outline: "none",
              backgroundColor: "#1F191966",
              boxShadow: "inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947",
              border: "none",
              display: "flex",
              color: "white",
              alignItems: "center",
              padding: "15px",
              borderRadius: "42px",
              width: "60%",
              fontSize: "16px",
            }}
            placeholder="E-mail"
          ></input>
          <input
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            style={{
              outline: "none",
              backgroundColor: "#1F191966",
              boxShadow: "inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947",
              border: "none",
              display: "flex",
              color: "white",
              alignItems: "center",
              padding: "15px",
              borderRadius: "42px",
              width: "60%",
              fontSize: "16px",
            }}
            placeholder="Passwrd"
            // type="password"
          ></input>
        </div>
        <div
          style={{
            width: "100%",
            gap: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            onClick={() => {
              validate();
            }}
            style={styles.button}
          >
            Login
          </button>
          <p style={styles.text_color}>Forgot Password?</p>
        </div>
      </div>
    </div>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  login_container1: {
    width: "100%",
    height: "35%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "end",
  },
  login_container2: {
    width: "100%",
    height: "65%",
    gap: "60px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    marginTop: "30px",
  },
  input_bg: {
    backgroundColor: "#1F191966",
    boxShadow: "inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947",
    border: "none",
    display: "flex",
    alignItems: "center",
    padding: "15px",
    borderRadius: "42px",
    outline: "none",
    width: "60%",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#36A54680",
    border: "none",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    padding: "15px",
    width: "65%",
    borderRadius: "42px",
  },
  text_color: {
    fontSize: "16px",
    color: "#36A546CC",
  },
});
