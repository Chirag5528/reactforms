/* 
  {
    "type": "autocomplete",
    "required": true,
    "label": "Autocomplete",
    "description": "asjdklasjdkl",
    "placeholder": "askldjkalsjdkl",
    "className": "form-control",
    "name": "autocomplete-1623940911178",
    "values": [
      {
        "label": "Option 1",
        "value": "option-1"
      },
      {
        "label": "Option 2",
        "value": "option-2"
      },
      {
        "label": "Option 3",
        "value": "option-3"
      }
    ]
  }
*/
import React from "react";
import FieldActions from "../FieldActions";
const Autocomplete = () => {
  const values = [
    {
      label: "Option 1",
      value: "option-1",
    },
    {
      label: "Option 2",
      value: "option-2",
    },
    {
      label: "Option 3",
      value: "option-3",
    },
  ];

  return (
    <React.Fragment>
      <FieldActions>
        <div className="form-group col-12"></div>
        <div className="fb-autocomplete form-group field-autocomplete-1623940911178-preview">
          <label
            htmlFor="autocomplete-1623940911178-preview"
            className="fb-autocomplete-label"
          >
            Autocomplete
            <span className="fb-required">*</span>
          </label>
          <input
            placeholder="Placeholder comes here"
            className="form-control"
            id="autocomplete-1623940911178-preview-input"
            title="asjdklasjdkl"
            autoComplete="off"
          />
          <small>Help Text/Description can come here</small>
          <input
            placeholder="Placeholder comes here"
            className="form-control"
            name="autocomplete-1623940911178-preview"
            id="autocomplete-1623940911178-preview"
            title="asjdklasjdkl"
            type="hidden"
          />
          <ul
            id="autocomplete-1623940911178-preview-list"
            className="fb-autocomplete-list"
            style={{ display: "none" }}
          >
            {values.map((val, index) => {
              return (
                <li value={val.value} key={index} style={{ display: "block" }}>
                  {val.label}
                </li>
              );
            })}
          </ul>
        </div>
      </FieldActions>
    </React.Fragment>
  );
};

export default Autocomplete;
