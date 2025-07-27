import { Search, User } from "lucide-react";
import { Button } from "@components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@components/ui/dialog";
import { WalletConnect } from "./WalletConnect";

export const Header = () => {
    return (
        <header className="w-full px-6 py-4 bg-background/95 backdrop-blur-sm border-b border-border/50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">S</span>
                    </div>
                    <span className="text-2xl font-bold text-foreground">
                        Sub<span className="text-primary">Sui</span>
                    </span>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
                        Home
                    </a>
                    <a href="/explore" className="text-foreground hover:text-primary transition-colors font-medium">
                        Explore
                    </a>
                    <a href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
                        About Us
                    </a>
                </nav>

                {/* Right side actions */}
                <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                        <Search className="h-5 w-5" />
                    </Button>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                                <User className="h-4 w-4 mr-2" />
                                Connect Wallet
                            </Button>
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