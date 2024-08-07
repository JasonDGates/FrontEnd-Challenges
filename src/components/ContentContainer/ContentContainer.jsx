import ModernLoginPage from "../ModernLoginPage/ModernLoginPage";
import SummaryPage from "../SummaryPage/SummaryPage";
import "./ContentContainer.css";

const ContentContainer = () => {
  return (
    <div className="content-container">
      <SummaryPage />

      <ModernLoginPage />
    </div>
  );
};

export default ContentContainer;
