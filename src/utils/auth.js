import {checkResponse} from "./api";


export const register = ({email, password, username}) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const errors = {};
  
        // Email validation
        if (!email) {
          errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          errors.email = "Invalid email format";
        }
  
        // Password validation
        if (!password) {
          errors.password = "Password is required";
        } else if (password.length < 6) {
          errors.password = "Password must be at least 6 characters";
        }
  
        // Username validation
        if (!username) {
          errors.username = "Username is required";
        } else if (username.length < 3) {
          errors.username = "Username must be at least 3 characters";
        }
  
        // If any errors exist, reject
        if (Object.keys(errors).length > 0) {
          reject({ errors });
          return;
        }
  
        // Otherwise resolve
        resolve({ token: "mock-jwt-token-12345", username});
  
      }, 1000);
    });
  };
  
 
 export const authorize = ({email, password}) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          resolve({ token: "mock-jwt-token-12345" });
        } else {
          reject({ message: "Email and password required" });
        }
      }, 1000); // Simulate network delay
    });
  };
  
  export const checkToken = (token) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (token) {
          resolve({
            data: { 
              name: "John Doe", 
              email: "john@example.com", 
              _id: "user-123" 
            },
          });
        } else {
          reject({ message: "Invalid token" });
        }
      }, 500);
    });
  };