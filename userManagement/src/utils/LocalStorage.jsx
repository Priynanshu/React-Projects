const defaultUsers = [
  {
    username: "Rahul Sharma",
    email: "rahul@gmail.com",
    role: "admin",
    status: "active",
  },
  {
    username: "Anjali Verma",
    email: "anjali@gmail.com",
    role: "user",
    status: "pending",
  },
  {
    username: "Amit Singh",
    email: "amit@gmail.com",
    role: "user",
    status: "active",
  },
  {
    username: "Priya Patel",
    email: "priya@gmail.com",
    role: "admin",
    status: "active",
  },
  {
    username: "Karan Mehta",
    email: "karan@gmail.com",
    role: "user",
    status: "blocked",
  },
];

export const getUsersFromLS = () => {
  const data = localStorage.getItem("users");

  if (!data) {
    localStorage.setItem("users", JSON.stringify(defaultUsers));
    return defaultUsers;
  }

  try {
    return JSON.parse(data);
  } catch (e) {
    console.error("Invalid JSON in localStorage, resetting...");
    localStorage.setItem("users", JSON.stringify(defaultUsers));
    return defaultUsers;
  }
};


export const setUsersToLS = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};
