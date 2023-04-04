import React, { useContext, useEffect } from "react";
import { Button, CircularProgress, Grid, TextField } from "@mui/material";
import "./profile.css";
import SearchDropDown from "../../common/SearchDropDown";
import Dropdown from "../../common/dropdown";
import FileUpload from "../../common/FileUpload";
import { skills, experience, primaryRole } from "../../../content";
import { UserContext } from "../../../context/userContext";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseconfig";
import { useNavigate } from "react-router-dom";
import toastMessage from "../../../util/toastMessage";
import FormLoading from "../../common/Loading/FormLoading";
function CandidateOnboarding() {
  const [userData, dispatch] = useContext(UserContext);
  const [isEdit, setIsEdit] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [screenLoading, setScreenLoading] = React.useState(true);
  const navigate = useNavigate();
  const [userInformation, setUserInformation] = React.useState({
    name: userData.user.displayName,
    email: userData.user.email,
    phone: "",
    location: "",
    skills: [], //
    primaryRole: "",
    linkedIn: "",
    experience: "",
    bio: "",
    resume: "",
  });

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
        userType: "candidate",
      });
      toastMessage("data updated sucessfully", "success");
      setLoading(false);
    } catch (e) {
      console.log(e);
      toastMessage("Failed", "danger");
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
        <Grid item xs={12} className="submit-btn-candidate">
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
          <label className="onboarding-label">Name</label>
          <TextField
            disabled={!isEdit}
            required
            id="outlined-basic"
            variant="outlined"
            fullWidth
            size="small"
            value={userInformation.name}
            onChange={(e) =>
              setUserInformation({ ...userInformation, name: e.target.value })
            }
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
            value={userInformation.email}
            onChange={(e) =>
              setUserInformation({ ...userInformation, email: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <label className="onboarding-label">phone</label>
          <TextField
            disabled={!isEdit}
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
          <label className="onboarding-label">primaryRole</label>

          <Dropdown
            disabled={!isEdit}
            required={true}
            options={primaryRole}
            onChange={(data) =>
              setUserInformation({ ...userInformation, primaryRole: data })
            }
            value={userInformation.primaryRole}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <label className="onboarding-label">linkedIn</label>
          <TextField
            disabled={!isEdit}
            id="outlined-basic"
            variant="outlined"
            fullWidth
            type={"url"}
            size="small"
            value={userInformation.linkedIn}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                linkedIn: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <label className="onboarding-label">experience</label>
          <Dropdown
            disabled={!isEdit}
            required={true}
            options={experience}
            onChange={(data) =>
              setUserInformation({ ...userInformation, experience: data })
            }
            value={userInformation.experience}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <label className="onboarding-label">bio</label>
          <TextField
            disabled={!isEdit}
            id="outlined-basic"
            variant="outlined"
            fullWidth
            size="small"
            value={userInformation.bio}
            onChange={(e) =>
              setUserInformation({ ...userInformation, bio: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <label className="onboarding-label">skills</label>
          <SearchDropDown
            disabled={!isEdit}
            required={true}
            options={skills}
            onChange={(data) => handleSkills(data, "add")}
            values={userInformation.skills}
            onDelete={(data) => handleSkills(data, "delete")}
          />
        </Grid>
        <Grid item xs={12}>
          <FileUpload
            disabled={!isEdit}
            required={true}
            filetype="doc"
            onUpload={(url) =>
              setUserInformation({ ...userInformation, resume: url })
            }
            value={userInformation.resume}
          />
        </Grid>
      </Grid>
    </form>
  );
}

export default CandidateOnboarding;
