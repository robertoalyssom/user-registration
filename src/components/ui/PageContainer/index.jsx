import "./style.css";

export default function PageContainer(props) {
  const { title, subtitle, children } = props;

  return (
    <div className="container">
      <div id="form-ctn" className="container-form">
        <h2>{title}</h2>
        {subtitle && <h3 className="subtitle-form">{subtitle}</h3>}
        {children}
      </div>
    </div>
  );
}
