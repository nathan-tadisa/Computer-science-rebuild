"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import styles from "./dropdown.module.css"

interface DropdownItem {
  label: string
  href: string
}

interface DropdownProps {
  buttonLabel: string
  items: DropdownItem[]
  buttonClassName?: string
  showChevron?: boolean
}

export default function Dropdown({ 
  buttonLabel, 
  items, 
  buttonClassName = "",
  showChevron = true 
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Toggle dropdown on button click (for mobile)
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  // Close dropdown when an item is clicked
  const handleItemClick = () => {
    setIsOpen(false)
  }

  return (
    <div 
      className={styles.dropdown} 
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className={`${styles.dropdownButton} ${buttonClassName}`}
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {buttonLabel}
        {showChevron && (
          <ChevronDown
            size={12}
            className={`text-[#6B6B6B] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        )}
      </button>
      
      <div 
        className={`${styles.dropdownContent} ${isOpen ? styles.open : ""}`}
        role="menu"
      >
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={styles.dropdownItem}
            onClick={handleItemClick}
            role="menuitem"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
