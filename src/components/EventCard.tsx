import { Button } from "@components/ui/button";
import { Card, CardContent, CardHeader } from "@components/ui/card";

interface EventCardProps {
    title: string;
    description: string;
    image: string;
    featured?: boolean;
}

export const EventCard = ({ title, description, image, featured = false }: EventCardProps) => {
    const handleCardClick = () => {
        window.location.href = "/event/1";
    };

    return (
        <Card
            className={`overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg border-0 ${featured ? "bg-gradient-card" : "bg-card"
                }`}
            onClick={handleCardClick}
        >
            <CardHeader className="p-0">
                <div className="relative h-48 w-full overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                        <Button
                            size="sm"
                            className="bg-background/90 text-foreground hover:bg-background border border-border/50"
                        >
                            Register
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
};