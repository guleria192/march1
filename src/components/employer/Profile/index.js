import React, { useContext, useEffect } from "react";
import { Button, CircularProgress, Grid, TextField } from "@mui/material";
import "./profile.css";
import Dropdown from "../../common/dropdown";
import FileUpload from "../../common/FileUpload";
import {  industryType, companySize } from "../../../content";
import { UserContext } from "../../../context/userContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../firebaseconfig";
import toastMessage from "../../../util/toastMessage";
import { useNavigate } from "react-router-dom";
import FormLoading from "../../common/Loading/FormLoading";
function CandidateOnboarding() {
  const [userData, dispatch] = useContext(UserContext);
const [loading, setLoading] = React.useState(false);
const navigate=useNavigate();
const [screenLoading, setScreenLoading] = React.useState(true);
const [isEdit, setIsEdit] = React.useState(false);
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
  const fetchData = async () => {
    const docRef = doc(db, "users", userData.user.email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setUserInformation(docSnap.data());
      setScreenLoading(false);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      setScreenLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

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
      toastMessage("data updated sucessfully", "success");
      setLoading(false);
    } catch (e) {
      console.log(e);
      toastMessage("Failed", "danger")
      setLoading(false);
    }
    setIsEdit(false);
  };
    return screenLoading ? (
      <FormLoading 
      fields={10}
       height={100}
   
      />
     ) : (
    <form onSubmit={(e) => submit(e)}>
      <Grid container spacing={2} className="onboarding-container">
      <Grid item xs={12} className="submit-btn-employer">
          <div>
            {loading ? (
              <button type="button">
                <CircularProgress />
              </button>
            ) : (
              <div>
                {isEdit ? (
                  <div style={{ display: "flex" }}>
                    <Button
                      style={{
                        backgroundColor: "red",
                        marginRight: "10px",
                      }}
                      onClick={() => {
                        setIsEdit(false);
                      }}
                      type="button"
                    >
                      Cancel
                    </Button>

                    <Button type="submit">Save</Button>
                  </div>
                ) : (
                  <Button
                    onClick={() => {
                      setIsEdit(true);
                    }}
                    type="button"
                  >
                    Edit
                  </Button>
                )}
              </div>
            )}
          </div>
          <Button type="button">Logout</Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <label className="onboarding-label"> Company Name</label>
          <TextField
            required
            disabled={!isEdit}
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
            disabled={!isEdit}
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
           disabled={!isEdit}
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
           disabled={!isEdit}
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
            disabled={!isEdit}
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
            disabled={!isEdit}
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
           disabled={!isEdit}
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
           disabled={!isEdit}
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
           disabled={!isEdit}
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
           disabled={!isEdit}
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
           disabled={!isEdit}
            required={true}
            filetype="image"
            onUpload={(url) =>
              setUserInformation({ ...userInformation, company_logo: url })
            }
            value={userInformation.company_logo}
          />
        </Grid>
        
      </Grid>
    </form>
  );
}

export default CandidateOnboarding;
