import { Search, Wallet, Plus, Ticket } from "lucide-react";
import { RiAppsLine, RiTicketLine, RiNotification3Line } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";


import { Button } from "@components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@components/ui/dialog";
import { WalletConnect } from "./WalletConnect";
import logo from "@assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import CustomConnectButton from "../atoms/CustomConnectButton";

export const Header = () => {
    return (
        <header className="w-full px-6 py-2 bg-background/95 backdrop-blur-sm fixed top-[0.8rem] z-1000">
            <nav className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}


                <div className="flex items-center gap-6">

                    <Link to="/" className="flex items-center gap-2">
                        <img src={logo} alt="Logo" className="h-6" />
                    </Link>
                    <NavLink className={({ isActive }) => `transition-colors font-[600] text-[.9rem] flex  items-center justify-center gap-[0.2rem] ${isActive
                        ? "text-brand-blue"
                        : "text-foreground hover:text-brand-blue"
                        }`
                    } to="/event" >
                        <RiTicketLine /> Event
                    </NavLink>
                    <Link
                        className="flex  items-center justify-center gap-[0.2rem]"
                        to="/explore"
                    >
                        <RiAppsLine /> Explore
                    </Link>

                    <Link to="/about">About Us</Link>
                </div>






                {/* Right side actions */}
                <div className="flex items-center space-x-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground hover:text-foreground"
                    >
                        <Search className="h-5 w-5" />
                    </Button>
                    <Link
                        className="flex  items-center justify-center gap-1"
                        to="/create-event"
                    >
                        <FiPlus /> Create Event
                    </Link>
                    <RiNotification3Line />


                    <Dialog>
                        <DialogTrigger asChild>
                            <CustomConnectButton />
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                            <DialogHeader>
                                <DialogTitle>Connect Wallet</DialogTitle>
                            </DialogHeader>
                            <WalletConnect />
                        </DialogContent>
                    </Dialog>
                </div>

            </nav>

        </header>
    );
};
