import { Header } from "@components/Header";
import { Button } from "@components/ui/button";
import { ArrowRight } from "lucide-react";

const Home = () => {
    return (
        <div className="min-h-screen bg-white relative overflow-hidden">

            <div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[90rem] h-[800px] rounded-full opacity-60 blur-3xl"
                style={{
                    background: 'radial-gradient(circle, #330066aa 0%, transparent 70%)'
                }}
            />

            <Header />

            {/* Hero Section */}
            <main className="flex-1 flex items-center justify-center px-6 py-20">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            Your <span className="text-primary">Ticketing</span>
                            <br />
                            <span className="text-primary">Journey</span> Awaits!
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Create your Events, log customer tickets
                            <br />
                            and handle event subscription
                        </p>
                    </div>

                    <div className="pt-4">
                        <Button
                            size="lg"
                            className="bg-[var(--gradient-primary)] hover:opacity-90 transition-opacity text-lg px-8 py-6 h-auto"
                        >
                            Join Our Movement
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default Home;