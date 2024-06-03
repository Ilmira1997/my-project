import styled from "styled-components";

export const SCFormGroup = styled.div`
    margin-bottom: 20px;
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    color: #555;
  }
  
  .form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.3s;
  }
  
  .form-group input:focus {
    border-color: #007bff;
    outline: none;
  }
`