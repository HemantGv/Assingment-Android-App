import React, { useState } from "react";
import { StyleSheet } from "react-native";

function EmployeeInfo() {
  const employee_details = [
    {
      emid: 1,
      name: "ram",
      dob: "10-12-2001",
      role: "Developer",
      id_number: 1,
    },
    {
      emid: 2,
      name: "arun",
      dob: "09-11-2002",
      role: "Software engineer",
      id_number: 2,
    },
    {
      emid: 3,
      name: "arjun",
      dob: "11-10-2000",
      role: "Software engineer",
      id_number: 3,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState(employee_details);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm.trim() === "") {
      setFilteredEmployees(employee_details);
    } else {
      const filtered = employee_details.filter((employee) =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredEmployees(filtered);
    }
  };

  const sortByName = (a, b) => {
    if (a.name.toLowerCase() === searchTerm.toLowerCase()) return -1;
    if (b.name.toLowerCase() === searchTerm.toLowerCase()) return 1;
    return 0;
  };

  return (
    <div>
      <div
        style={{
          borderRadius: "42px",
          position: "sticky",
          top: 164,
          padding: 10,
          width: "85%",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "#131615",
          display: "flex",
          zIndex: "9999",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <input
          style={{
            width: "70%",
            backgroundColor: "transparent",
            border: "none",
            color: "white",
            outline: "none",
            fontSize: "16px",
          }}
          placeholder="Search with name"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        ></input>
        <img
          style={{ height: "25px" }}
          src="/assets/search-alt-1-svgrepo-com.png"
        ></img>
      </div>
      <div style={{ position: "static", zIndex: "-1" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            paddingTop: "20px",
            paddingBottom: "80px",
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {filteredEmployees.sort(sortByName).map((d) => (
            <div
              key={d.emid}
              style={{
                padding: "7px",
                display: "flex",
                flexDirection: "column",
                borderRadius: 10,
                backgroundColor: "#131B18",
                zIndex: "10",
                fontWeight: "100",
                color: "gray",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    padding: "5px 10px 5px 10px",

                    borderRadius: "42px",
                    backgroundColor: "#19201E",
                    border: "1px solid black",
                  }}
                >
                  {d.id_number}
                </div>
                <p
                  style={{
                    display: "flex",
                    width: "60px",
                    justifyContent: "space-between",
                  }}
                >
                  EMP ID
                </p>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    color: "white",
                    fontWeight: "800",
                  }}
                >
                  : {d.emid}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p
                  style={{
                    display: "flex",
                    width: "60px",
                    justifyContent: "space-between",
                  }}
                >
                  Name
                </p>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    color: "white",
                    fontWeight: "800",
                  }}
                >
                  : {d.name}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p
                  style={{
                    display: "flex",
                    width: "60px",
                    justifyContent: "space-between",
                  }}
                >
                  DOB
                </p>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    color: "#84591E",
                    fontWeight: "800",
                  }}
                >
                  : {d.dob}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p
                  style={{
                    display: "flex",
                    width: "60px",
                    justifyContent: "space-between",
                  }}
                >
                  Role
                </p>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    color: "#266632",
                    fontWeight: "800",
                  }}
                >
                  : {d.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmployeeInfo;

const styles = StyleSheet.create({});
