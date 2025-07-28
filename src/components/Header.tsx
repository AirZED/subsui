import { Search, Wallet } from "lucide-react";
import { Button } from "@components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@components/ui/dialog";
import { WalletConnect } from "./WalletConnect";
import logo from "@assets/logo.png";
import { NavLink } from "react-router-dom";
import CustomConnectButton from "../atoms/CustomConnectButton";

export const Header = () => {
    return (
        <header className="w-full px-6 py-2 bg-background/95 backdrop-blur-sm fixed top-[0.8rem] z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <img src={logo} alt="Logo" className="h-6" />

                {/* Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `transition-colors font-[600] text-[.9rem] ${isActive
                                ? "text-brand-blue"
                                : "text-foreground hover:text-brand-blue"
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/explore"
                        className={({ isActive }) =>
                            `transition-colors font-[600] text-[.9rem] ${isActive
                                ? "text-brand-blue"
                                : "text-foreground hover:text-brand-blue"
                            }`
                        }
                    >
                        Explore
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `transition-colors font-[600] text-[.9rem] ${isActive
                                ? "text-brand-blue"
                                : "text-foreground hover:text-brand-blue"
                            }`
                        }
                    >
                        About Us
                    </NavLink>
                </nav>
                {/* Right side actions */}
                <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                        <Search className="h-5 w-5" />
                    </Button>

                    <Dialog>
                        <DialogTrigger asChild>
                           <CustomConnectButton/>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                            <DialogHeader>
                                <DialogTitle>Connect Wallet</DialogTitle>
                            </DialogHeader>
                            <WalletConnect />
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </header>
    );
};