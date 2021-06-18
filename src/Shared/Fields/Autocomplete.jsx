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
const Autocomplete = (props) => {
  // For Creating a single ID or Name
  const time = new Date().getTime();
  const {
    control: {
      className,
      label,
      name,
      requiredValidOption,
      required,
      type,
      values,
      placeholder,
      id,
      title,
    },
  } = props;

  return (
    <React.Fragment>
      <div className="fb-autocomplete form-group col-12">
        <label
          htmlFor="autocomplete-1623940911178-preview"
          className="fb-autocomplete-label"
        >
          {label}
          {requiredValidOption && <span className="fb-required">*</span>}
        </label>
        <input
          placeholder={placeholder}
          className={`${className} form-control`}
          id={`${id}${time}`}
          title={title}
          autoComplete="off"
          name={name}
          required={required}
          type={type}
        />
        <input
          placeholder={placeholder}
          className={`${className} form-control`}
          id={`${name}-${time}-preview`}
          title={title}
          autoComplete="off"
          name={`${name}-${time}-preview`}
          type="hidden"
        />
        <ul
          id={`${name}-${time}-preview-lilst`}
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
    </React.Fragment>
  );
};

export default Autocomplete;
