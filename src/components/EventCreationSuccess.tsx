import { ImCheckmark } from "react-icons/im";
import { Button } from "./ui/button";

const EventCreationSuccessModal = () => {
  return (
    <div>
      <div>
        <div className="h-6 w-6 rounded-full bg-[#009900]">
          <ImCheckmark className="text-white" />
        </div>

        <div>
          <h1>Event Creation Successful</h1>
          <p>
            Registrations will be closed as soon as your set limit is reached.
          </p>
        </div>
      </div>

      <div>
        <Button variant="outline">Share Link </Button>
        <Button>Explore Events </Button>
      </div>
    </div>
  );
};

export default EventCreationSuccessModal;
