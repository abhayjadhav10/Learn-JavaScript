function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ user: "Abhi", url: "https://abhi.com" });
    //   reject('User not found')
    }, 3000);
  });
}

async function getUserdata() {
  try {
    console.log("Fetching User Data...");
    const userData = await fetchUserData();
    console.log("User Data Fetched Successfully.");
    console.log("User Data: ", userData);
  } catch (error) {
    console.log("Error Fetching User Data: ", error);
  }
}

getUserdata();
