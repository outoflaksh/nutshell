import { useEffect, useState } from "react";
import axios from "axios";
import Summary from "./Summary";
import Loading from "./Loading";
import { UploadButton } from "../components/styles/Main.styled";

const UploadForm = ({ display, setDisplay }) => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose a file");
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState("");

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("vid_file", file);
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:8000/upload", formData, {
        headers: {
          "Content-Type": "multipart-form-data",
        },
      });
      setSummary(res.data.msg);
      setLoading(false);
    } catch {}
  };
  useEffect(() => {
    if (summary) {
      setDisplay("summary");
    } else {
      setDisplay("main");
    }
  }, [summary]);
  return (
    <>
      {loading ? <Loading></Loading> : undefined}

      {summary ? (
        <Summary summary={summary} />
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            id="vid_file"
            name="vid_file"
            onChange={handleChange}
          />
          <label htmlFor="vid_file">{filename}</label>
          <br />
          <UploadButton
            type="submit"
            value="Upload your recorded lecture"
          ></UploadButton>
        </form>
      )}
    </>
  );
};

export default UploadForm;
