import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: "Home",
    href: "/"
  }, {
    name: "How It Works",
    href: "/how-it-works"
  }, {
    name: "About Us",
    href: "/about"
  }, {
    name: "Sustainability",
    href: "/sustainability"
  }];
  const isActive = (href: string) => location.pathname === href;
  return <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-border shadow-soft pt-5 bg-slate-100">
      {/* Container */}
      <div className="container mx-auto px-4 md:px-6">
        {/* Main navigation bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-4">
            <img alt="Super Energy" className="h-12 w-auto cursor-pointer object-contain transition-all duration-300" src="/lovable-uploads/a3ad0f90-3f30-4006-8027-6d25a277ad0e.png" />
            <div className="h-8 w-px bg-gray-500 hidden md:block" />
            <img alt="1 Global Enterprises Logo" src="/logo123.png" className="hidden md:block h-12 w-auto object-contain transition-all duration-300" />
          </Link>

          {/* Right side (Desktop ≥ lg): group NAV + CTA to avoid huge space */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navItems.map(item => <Link key={item.name} to={item.href} className={`text-foreground hover:text-primary transition-colors duration-200 font-medium relative group ${isActive(item.href) ? "text-primary" : ""}`}>
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>)}
            </nav>

            <div className="flex items-center gap-3">
              <Button size="sm" asChild className="bg-gradient-eco hover:opacity-90 transition-opacity">
                <Link to="/contact">Contact</Link>
              </Button>
            </div>
          </div>

          {/* Tablet-only CTA (md to <lg), since nav is hidden there */}
          <div className="hidden md:flex lg:hidden items-center gap-3">
            <Button size="sm" asChild className="bg-gradient-eco hover:opacity-90 transition-opacity">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile Menu Button (<lg) */}
          <button onClick={() => setIsMenuOpen(v => !v)} className="lg:hidden p-2 text-foreground hover:text-primary transition-colors" aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <div className="lg:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map(item => <Link key={item.name} to={item.href} onClick={() => setIsMenuOpen(false)} className={`block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium ${isActive(item.href) ? "text-primary" : ""}`}>
                {item.name}
              </Link>)}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <Button asChild className="bg-gradient-eco">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </Button>
            </div>
          </div>
        </div>}
    </header>;
};
export default Header;