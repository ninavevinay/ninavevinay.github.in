// Web3Forms – serverless email service (no backend required)
// Sign up at https://web3forms.com to get your own access key
// Replace the access_key below with your personal key from web3forms.com

const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY";

export const submitContactForm = async ({ name, email, message }) => {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      name,
      email,
      message,
      subject: `New message from ${name} – Portfolio Contact Form`,
    }),
  });

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.message || "Failed to send message. Please try again.");
  }

  return data;
};
