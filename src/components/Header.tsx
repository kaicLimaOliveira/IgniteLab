import { Logo } from "./Logo";
import { TextAlignJustify, X } from "phosphor-react"

interface ToggleProps {
    toggle: boolean;
    changeDisplay: () => void;
}

export function Header({ changeDisplay, toggle }: ToggleProps) {
    return (
        <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600 sm:justify-around">
            <Logo />

            <div className="sm:block hidden sm:flex items-center ml-4">
                <span className="text-base mr-1">Aulas</span>
                {toggle ? (
                    <X className="text-blue-500 transition-transform" onClick={changeDisplay} size={36} />
                ) : (
                    <TextAlignJustify className="text-blue-500 transition-transform" onClick={changeDisplay} size={36} />
                )}
            </div>
        </header>
    )
}