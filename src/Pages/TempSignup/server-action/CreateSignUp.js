// apiService.js
// const API_BASE_URL = "https://your-api-endpoint.com"; // Replace with your API base URL

export const createMember = async (memberData) => {
  try {
    const response = await fetch(`http://104.248.122.19:5001/scienceacademyapi/v1/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(memberData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Server response:", errorData);
      throw new Error("Failed to submit the form: " + (errorData.message || "Unknown error"));
    }

    return await response.json();
  } catch (error) {
    console.error("Error submitting the form:", error);
    throw error;
  }
};
