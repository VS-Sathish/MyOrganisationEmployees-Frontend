import React from "react";
import {
  Box,
  Button,
  FormGroup,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import { Stack } from "@mui/system";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
const AddEmployee = () => {
  const navigate = useNavigate();
  const [employeeDetails, setEmployeeDetails] = useState({
    name: "",
    email: "",
    address: "",
    mobileNumber: "",
    designation: "",
    bloodGroup: "",
  });

  const handelInput = (value) => {
    return setEmployeeDetails((employee) => {
      return { ...employee, ...value };
    });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log("submitting employee details");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/employees`,
        employeeDetails
      );
      if (response) {
        setEmployeeDetails({
          name: "",
          email: "",
          address: "",
          mobileNumber: "",
          designation: "",
          bloodGroup: "",
        });
        navigate("/employees/list");
      }
    } catch (error) {
      console.log("Error:", error);
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
        Add an Employee
      </Typography>

      <Paper
        sx={{
          padding: "32px",
          width: "500px",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "10px",
        }}
      >
        <form onSubmit={handelSubmit}>
          <FormGroup>
            <Box
              sx={{
                display: "flex",
                justifyItems: "center",
              }}
            >
              <Stack
                direction="column"
                spacing={1}
                height="520px"
                width="500px"
                justifyContent="center"
              >
                <Stack>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <TextField
                    id="name"
                    type="text"
                    placeholder="Enter Name"
                    value={employeeDetails.name}
                    onChange={(e) => handelInput({ name: e.target.value })}
                  />
                </Stack>
                <Stack>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <TextField
                    id="email"
                    type="text"
                    placeholder="Enter Email"
                    value={employeeDetails.email}
                    onChange={(e) => handelInput({ email: e.target.value })}
                  />
                </Stack>
                <Stack>
                  <FormLabel htmlFor="address">Address</FormLabel>
                  <TextField
                    id="address"
                    type="text"
                    placeholder="Enter Address"
                    value={employeeDetails.address}
                    onChange={(e) => handelInput({ address: e.target.value })}
                  />
                </Stack>
                <Stack>
                  <FormLabel htmlFor="mobileNumber">MobileNumber</FormLabel>
                  <TextField
                    id="mobileNumber"
                    type="text"
                    placeholder="Enter MobileNumber"
                    value={employeeDetails.mobileNumber}
                    onChange={(e) =>
                      handelInput({ mobileNumber: e.target.value })
                    }
                  />
                </Stack>
                <Stack>
                  <FormLabel htmlFor="designation">Desigination</FormLabel>
                  <TextField
                    id="designation"
                    type="text"
                    placeholder="Enter Designation"
                    value={employeeDetails.designation}
                    onChange={(e) =>
                      handelInput({ designation: e.target.value })
                    }
                  />
                </Stack>
                <Stack>
                  <FormLabel htmlFor="bloodGroup">BloodGroup</FormLabel>
                  <TextField
                    error
                    id="bloodGroup"
                    type="text"
                    placeholder="Enter BloodGroup"
                    value={employeeDetails.bloodGroup}
                    onChange={(e) =>
                      handelInput({ bloodGroup: e.target.value })
                    }
                  />
                </Stack>
                <Stack>
                  <Button
                    type="submit"
                    variant="contained"
                    size="small"
                    startIcon={<PersonAddIcon />}
                  >
                    Add an Employee
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </FormGroup>
        </form>
      </Paper>
    </>
  );
};

export default AddEmployee;
