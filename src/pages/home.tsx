import { Button } from "@components/ui/button";
import { ArrowRight } from "lucide-react";
import { useWallet } from "@suiet/wallet-kit";
import { Link } from "react-router-dom";
import CustomConnectButton from "../atoms/CustomConnectButton";


const Home = () => {

    const { connected } = useWallet();

    return (
        <div className="min-h-screen bg-white relative overflow-hidden pt-[6rem]">

            <div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[90rem] h-[800px] rounded-full opacity-60 blur-3xl"
                style={{
                    background: 'radial-gradient(circle, #330066aa 0%, transparent 70%)'
                }}
            />



            {/* Hero Section */}
            <main className="flex-1 flex items-center justify-center px-6 py-20">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="space-y-6">
                        <h1 className="text-[2rem] md:text-[3rem] lg:text-[4rem] leading-tight">
                            Your <span className="text-gradient">Ticketing</span>
                            <br />
                            <span className="text-primary">Journey</span> Awaits!
                        </h1>

                        <p className="text-xl md:text-[1.5rem] text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Create your Events, log customer tickets
                            <br />
                            and handle event subscription
                        </p>
                    </div>


                    {connected ? (
                        <Link to="/create-event">
                            <Button className="text-white bg-brand-blue hover:bg-brand-blue-dark transition-colors flex items-center cursor-pointer rounded-[16px] px-4 py-2 text-[1rem] mx-auto cursor-pointer">
                                Create an event here
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    ) : (


                        <CustomConnectButton text="Connect Wallet to Get Started" icon={<ArrowRight className="ml-2 h-5 w-5" />} />


                    )}
                </div>
            </main>

        </div>
    );
};

export default Home;