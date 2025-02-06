import CheckoutForm from "../CheckoutForm/CheckoutForm";
import HoverCard from "../HoverCard/HoverCard";
import ModernLoginPage from "../ModernLoginPage/ModernLoginPage";
import SummaryPage from "../SummaryPage/SummaryPage";
import "./ContentContainer.css";

const ContentContainer = () => {
  return (
    <div className="content-container">
      <SummaryPage />

      <ModernLoginPage />

      <CheckoutForm />

      <HoverCard />
    </div>
  );
};

export default ContentContainer;
