function getPostData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Post data: 455");
    }, 2000);
  });
}

function getCommentData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Comment data: 763");
    }, 3000);
  });
}

async function getBlogData() {
  try {
    console.log("Fetching blog data...");
    const [postData, commentData] = await Promise.all([
      getPostData(),
      getCommentData(),
    ]);
    console.log("Blog data fetched successfully");
    console.log(postData);
    console.log(commentData);
  } catch (error) {
    console.error("Error fetching blog data: ", error);
  }
}

getBlogData();
