import { Header } from "@components/Header";
import { Button } from "@components/ui/button";
import { Card, CardContent } from "@components/ui/card";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Clock,
  Copy,
  CreditCard,
} from "lucide-react";
// import eventHeroImage from "@assets/event-hero.jpg";

const EventDetail = ({ onClose }) => {
  return (
    <Card className="overflow-hidden border-0 shadow-lg">
      {/* Header with Copy Link */}
      <div className="flex justify-between items-center p-6 pb-0">
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <Copy className="h-4 w-4 mr-2" />
          Copy Link
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <Copy className="h-4 w-4 mr-2" />
          Copy Link
        </Button>
      </div>

      {/* Hero Image */}
      <div className="px-6">
        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
          <img
            // src={eventHeroImage}
            alt="The SubSUI Reform"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <CardContent className="p-6 space-y-6">
        {/* Event Title */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            The SubSUI Reform
          </h1>
          <div className="flex items-center text-muted-foreground">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
              <span className="text-primary font-medium text-sm">D</span>
            </div>
            <span>By David Mabadeje</span>
          </div>
        </div>

        {/* Event Details */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Date & Time */}
          <div className="space-y-2">
            <div className="flex items-center text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2" />
              <span className="text-sm">Saturday, April 11</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Clock className="h-4 w-4 mr-2" />
              <span className="text-sm">10:00 AM - 2:00 PM</span>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <div className="flex items-center text-muted-foreground">
              <MapPin className="h-4 w-4 mr-2" />
              <div>
                <div className="font-medium text-foreground">Eko Hotels</div>
                <div className="text-sm">Ikeja, Lagos</div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Button */}
        <div className="pt-4">
          <Button
            size="lg"
            className="w-full bg-gradient-primary hover:opacity-90 transition-opacity h-14 text-lg"
          >
            <CreditCard className="h-5 w-5 mr-2" />
            Pay 3.05 SUI
          </Button>
        </div>

        {/* Event Description */}
        <div className="pt-6 border-t border-border">
          <h2 className="text-xl font-bold text-foreground mb-4">
            Event Description
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Join us for an exhilarating Tech Meetup, where innovators,
              developers, and tech enthusiasts come together to share and
              explore groundbreaking ideas. This event features a comprehensive
              agenda, including:
            </p>
            <p>
              <strong className="text-foreground">Keynote Address:</strong> Kick
              off the day with an inspiring talk from a leading industry expert
              on the future of technology.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventDetail;
