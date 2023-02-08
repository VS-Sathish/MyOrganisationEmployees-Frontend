import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/employees`
      );
      setEmployees(response.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handelDelete = async (employeeID) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/employees/${employeeID}`
      );
      if (response) {
        getAllEmployees();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Typography
        variant="h5"
        component="div"
        fontFamily="sanSerif"
        sx={{ textAlign: "center", marginTop: "20px" }}
      >
        Employees
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          padding: 3,
          marginTop: 2,
          maxWidth: 1000,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Address</StyledTableCell>
              <StyledTableCell>MobileNumber</StyledTableCell>
              <StyledTableCell>Desigination</StyledTableCell>
              <StyledTableCell>BloodGroup</StyledTableCell>
              <StyledTableCell>EditEmployee</StyledTableCell>
              <StyledTableCell>DeleteEmployee</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.length &&
              employees.map((employee, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>{employee.name}</StyledTableCell>
                  <StyledTableCell>{employee.email}</StyledTableCell>
                  <StyledTableCell>{employee.address}</StyledTableCell>
                  <StyledTableCell>{employee.mobileNumber}</StyledTableCell>
                  <StyledTableCell>{employee.designation}</StyledTableCell>
                  <StyledTableCell>{employee.bloodGroup}</StyledTableCell>
                  <StyledTableCell>
                    <NavLink to={`/employees/${employee._id}/update`}>
                      <EditIcon />
                    </NavLink>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Button onClick={() => handelDelete(employee._id)}>
                      <DeleteIcon />
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default EmployeeList;
