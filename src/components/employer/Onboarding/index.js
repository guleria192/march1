import React, { useContext } from "react";
import { Button, CircularProgress, Grid, TextField } from "@mui/material";
import "./onboarding.css";
import Dropdown from "../../common/dropdown";
import FileUpload from "../../common/FileUpload";
import {  industryType, companySize } from "../../../content";
import { UserContext } from "../../../context/userContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebaseconfig";
import toastMessage from "../../../util/toastMessage";
import { useNavigate } from "react-router-dom";
function CandidateOnboarding() {
  const [userData, dispatch] = useContext(UserContext);
const [loading, setLoading] = React.useState(false);
const navigate=useNavigate();
  const [userInformation, setUserInformation] = React.useState({
    name: userData.user.displayName,
    employer_email: userData.user.email,
    phone: "",
    location: "",
    industry_type: "",
    company_size: "",
    role: "",
    website: "",
    company_name: "",
    company_tag: "",
    company_bio: "",
    company_logo: "",
  });
  const handleSkills = (data, type) => {
    if (type === "delete") {
      let new_data = userInformation.skills.filter((skill) => skill !== data);
      setUserInformation({ ...userInformation, skills: new_data });
    } else {
      if (userInformation.skills.find((skill) => skill === data)) {
      } else {
        let new_data = [...userInformation.skills, data];
        setUserInformation({ ...userInformation, skills: new_data });
      }
    }
  };
  const submit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(userInformation);
    try {
      // Add a new document in collection "cities"
      await setDoc(doc(db, "users", userData.user.email), {
        ...userInformation,
        userType: "employer",
      });
      toastMessage("Onboarding Successful", "success")
      navigate('/employer/profile')
      setLoading(false);
    } catch (e) {
      console.log(e);
      toastMessage("Onboarding Failed", "danger")
      setLoading(false);
    }
  };
  return (
    <form onSubmit={(e) => submit(e)}>
      <Grid container spacing={2} className="onboarding-container">
        <Grid item xs={12}>
          <h1>ONBOARDING EMPLOYER</h1>
        </Grid>
        <Grid item xs={12} md={6}>
          <label className="onboarding-label"> Company Name</label>
          <TextField
            required
            id="outlined-basic"
            variant="outlined"
            fullWidth
            size="small"
            value={userInformation.company_name}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                company_name: e.target.value,
              })
            }
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <label className="onboarding-label">phone</label>
          <TextField
            required
            id="outlined-basic"
            variant="outlined"
            fullWidth
            size="small"
            value={userInformation.phone}
            onChange={(e) =>
              setUserInformation({ ...userInformation, phone: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <label className="onboarding-label">Industry Type</label>

          <Dropdown
            required={true}
            options={industryType}
            onChange={(data) =>
              setUserInformation({ ...userInformation, industry_type: data })
            }
            value={userInformation.industry_type}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <label className="onboarding-label">Company Size</label>

          <Dropdown
            required={true}
            options={companySize}
            onChange={(data) =>
              setUserInformation({ ...userInformation, company_size: data })
            }
            value={userInformation.company_size}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <label className="onboarding-label">Email</label>
          <TextField
            required
            disabled
            id="outlined-basic"
            variant="outlined"
            fullWidth
            type={"email"}
            size="small"
            value={userInformation.employer_email}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                employer_email: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <label className="onboarding-label"> Name</label>
          <TextField
            required
            id="outlined-basic"
            variant="outlined"
            fullWidth
            size="small"
            value={userInformation.name}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                name: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <label className="onboarding-label"> Role</label>
          <TextField
            required
            id="outlined-basic"
            variant="outlined"
            fullWidth
            size="small"
            value={userInformation.role}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                role: e.target.value,
              })
            }
          />
        </Grid>
  <Grid item xs={12} md={6}>
          <label className="onboarding-label">location</label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            size="small"
            value={userInformation.location}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                location: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <label className="onboarding-label">website</label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            type={"url"}
            size="small"
            value={userInformation.website}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                website: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <label className="onboarding-label">
          Company tagline
          </label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            size="small"
            value={userInformation.company_tag}
            onChange={(e) =>
              setUserInformation({ ...userInformation, company_tag: e.target.value })
            }
          />
        </Grid>
      
        <Grid item xs={12} >
          <label className="onboarding-label">bio</label>
          <TextField
            multiline
            minRows={4}
            id="outlined-basic"
            variant="outlined"
            fullWidth
            size="small"
            value={userInformation.company_bio}
            onChange={(e) =>
              setUserInformation({ ...userInformation, company_bio: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <FileUpload
            required={true}
            filetype="image"
            onUpload={(url) =>
              setUserInformation({ ...userInformation, company_logo: url })
            }
            value={userInformation.company_logo}
          />
        </Grid>
        <Grid item xs={12} className="submit-btn">
          {loading ? (
            <button
            type="button"
            >
            <CircularProgress />
            </button>
          ) : (
            <Button disabled={userInformation.resume === ""} type="submit">
              Complete Onboarding
            </Button>
          )}
        </Grid>
      </Grid>
    </form>
  );
}

export default CandidateOnboarding;
