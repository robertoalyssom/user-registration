export default function ServerErrorMsg({ serverError }) {
  return (
    serverError !== "" && <span className="server_msg-err">{serverError}</span>
  );
}
