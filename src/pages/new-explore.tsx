import { Header } from "@components/Header";
import { EventCard } from "@components/EventCard";
import { Button } from "@components/ui/button";
import { ArrowRight } from "lucide-react";
import techEventImage from "@assets/tech-event.jpg";
import aiEventImage from "@assets/ai-event.jpg";

const Explore = () => {
    const featuredEvents = [
        {
            title: "The SubSUI Reform",
            description: "Join us for an enlightening event, 'SUI Blockchain in Action: Revolutionizing Event Planning!' This session will dive deep into how SUI Blockchain technology can streamline the event planning process, enhance...",
            image: techEventImage
        },
        {
            title: "The AI Summit",
            description: "Join us for an inspiring gathering at the 'AI Summit 2025: Shaping the Future of Innovation!' This event will explore the transformative power of artificial intelligence in various industries, showcasing how AI can enhance...",
            image: aiEventImage
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="max-w-7xl mx-auto px-6 py-12">
                {/* Page Header */}
                <div className="space-y-6 mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                        Explore Events
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Discover exciting events tailored just for you! Browse through various categories, search by location,
                        or connect with registered communities to find the perfect gathering that suits your interests.
                    </p>
                </div>

                {/* Featured Events */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-foreground mb-8">
                        Featured Events
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {featuredEvents.map((event, index) => (
                            <EventCard
                                key={index}
                                title={event.title}
                                description={event.description}
                                image={event.image}
                                featured={true}
                            />
                        ))}
                    </div>

                    <div className="text-center">
                        <Button
                            className="bg-gradient-primary hover:opacity-90 transition-opacity"
                        >
                            See all
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </section>

                {/* Browse by Category */}
                <section>
                    <h2 className="text-3xl font-bold text-foreground mb-8">
                        Browse by category
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative h-64 rounded-xl overflow-hidden group cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/80 z-10" />
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800')] bg-cover bg-center" />
                            <div className="relative z-20 h-full flex items-center justify-center">
                                <h3 className="text-2xl font-bold text-white">Technology</h3>
                            </div>
                        </div>

                        <div className="relative h-64 rounded-xl overflow-hidden group cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-yellow-600/80 z-10" />
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800')] bg-cover bg-center" />
                            <div className="relative z-20 h-full flex items-center justify-center">
                                <h3 className="text-2xl font-bold text-white">Arts & Culture</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Explore;