import { useState } from "react";

type MenuItem = {
    label: string;
    value: string;
}

type DropdownProps = {
    label: string;
    menuItems: MenuItem[];
    onSelect: (item: MenuItem) => void;
}

const Dropdown = ({label, menuItems, onSelect}: DropdownProps) => {
    const [isOpen, setIsOpen] = useState<false | true>(false);
    
}