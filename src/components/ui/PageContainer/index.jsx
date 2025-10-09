import "./style.css";

export default function PageContainer(props) {
  const { subtitle, children } = props;

  return (
    <div id="form-ctn" className="container-form">
      <h2>User Registration</h2>
      {subtitle && <h3 className="subtitle-form">{subtitle}</h3>}
      {children}
    </div>
  );
}
