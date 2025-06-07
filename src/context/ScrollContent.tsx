import React, { createContext, useContext, useRef } from "react";

interface ScrollContextType {
    scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
    howWorkRef: React.RefObject<HTMLLIElement>;
    possibilitiesRef: React.RefObject<HTMLLIElement>;
    formatsRef: React.RefObject<HTMLLIElement>;
    reviewsRef: React.RefObject<HTMLLIElement>;
    faqRef: React.RefObject<HTMLDivElement>;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export const useScroll = () => {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error("useScroll must be used within a ScrollProvider");
    }
    return context;
};

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const howWorkRef = useRef<HTMLLIElement>(null!);
    const possibilitiesRef = useRef<HTMLLIElement>(null!);
    const formatsRef = useRef<HTMLLIElement>(null!);
    const reviewsRef = useRef<HTMLLIElement>(null!);
    const faqRef = useRef<HTMLDivElement>(null!);

    const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <ScrollContext.Provider value={{
        scrollToSection,
            howWorkRef,
            possibilitiesRef,
            formatsRef,
            reviewsRef,
            faqRef
    }}>
    {children}
    </ScrollContext.Provider>
);
};
