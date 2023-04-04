import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./dropdown.css";
function SearchDropDown({
  options,
  onChange,
  onDelete,
  values,
  required,
  disabled,
}) {
  return (
    <div>
      <Autocomplete
        disabled={disabled}
        disablePortal
        required={required}
        id="combo-box-demo"
        options={options || []}
        size="small"
        fullWidth
        renderInput={(params) => <TextField {...params} />}
        onChange={(event, value) => onChange(value)}
      />
      <div className="dropdown-values">
        {values.map((value) => {
          return (
            <div
            style={{
              pointerEvents: disabled ? "none" : "auto",
              opacity: disabled ? 0.5 : 1,
            }}
            onClick={() => onDelete(value, "remove")}>
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

export default SearchDropDown;
