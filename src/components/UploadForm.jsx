const UploadForm = () => {
  return (
    <form
      action="http://localhost:8000/upload"
      method="POST"
      encType="multipart/form-data"
    >
      <input type="file" name="vid_file" />
      <input type="submit" value="Upload" />
    </form>
  );
};

export default UploadForm;
