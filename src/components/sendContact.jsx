const [subject, setSubject] = useState("");
const [message, setMessage] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const [success, setSuccess] = useState(false);

async function sendContact(e) {
  e.preventDefault();
  setError("");
  setSuccess(false);
  setLoading(true);

  try {
    const res = await fetch("/.netlify/functions/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        subject,
        message,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error || "Failed to send");
    }

    setSuccess(true);
    setSubject("");
    setMessage("");
  } catch (err) {
    setError(err.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
}

export default sendContact;