import { ImCheckmark } from "react-icons/im";
import { Button } from "./ui/button";

// Event Creation Success Modal Component
const EventCreationSuccessModal = ({ onClose }) => {
  return (
    <div className="border border-gray-200 bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      {/* Success Icon */}
      <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
        <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
          <ImCheckmark className="text-white text-sm" />
        </div>
      </div>

      {/* Success Message */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Event Creation Successful!
        </h1>
        <p className="text-gray-600">
          Your event has been created successfully. Registrations will be closed
          as soon as your set limit is reached.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button
          variant="outline"
          onClick={() => {
            // Handle share link logic here
            navigator.clipboard.writeText(window.location.href);
            alert("Event link copied to clipboard!");
          }}
        >
          Share Link
        </Button>
        <Button
          onClick={() => {
            // Handle explore events navigation
            onClose();
            // You can add navigation logic here
            console.log("Navigate to explore events");
          }}
        >
          Explore Events
        </Button>
      </div>
    </div>
  );
};

export default EventCreationSuccessModal;
