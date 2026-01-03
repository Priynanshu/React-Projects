const defaultTasks = [
    {
        title: "Learn React",
        category: "Work",
        priority: "High",
        status: "Pending",
    },
    {
        title: "Learn React Router",
        category: "Personal",
        priority: "Medium",
        status: "Completed",
    },
    {
        title: "Explore Redux",
        category: "Study",
        priority: "High",
        status: "Pending",
    },
    {
        title: "UI Improvement",
        category: "Work",
        priority: "Low",
        status: "Completed",
    },
    {
        title: "Backend Basics",
        category: "Study",
        priority: "Medium",
        status: "Pending",
    },
];

export const getDataToLS = () => {
    const data = localStorage.getItem("tasksec")
    if (!data) {
        localStorage.setItem("tasksec", JSON.stringify(defaultTasks))
        return defaultTasks;
    }

    try {
        return JSON.parse(data);
    } catch (e) {
        console.error("Invalid JSON in localStorage, resetting...");
        localStorage.setItem("tasksec", JSON.stringify(defaultTasks))
        return defaultTasks;
    }
}

export const setDataToLS = (task) => {
    localStorage.setItem("tasksec", JSON.stringify(task))
}