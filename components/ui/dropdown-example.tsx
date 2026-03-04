/**
 * DROPDOWN COMPONENT - USAGE EXAMPLES
 * 
 * This file shows how to use the Dropdown component in different scenarios.
 * You can copy these examples into your pages/components.
 */

import Dropdown from "./dropdown"

export function DropdownExamples() {
  // Example 1: Basic dropdown
  const basicItems = [
    { label: "Item 1", href: "/item-1" },
    { label: "Item 2", href: "/item-2" },
    { label: "Item 3", href: "/item-3" },
  ]

  // Example 2: Navigation dropdown
  const navItems = [
    { label: "Undergraduate", href: "/undergraduate" },
    { label: "Postgraduate", href: "/postgraduate" },
    { label: "PhD", href: "/phd" },
  ]

  // Example 3: User menu dropdown
  const userMenuItems = [
    { label: "Profile", href: "/profile" },
    { label: "Settings", href: "/settings" },
    { label: "Logout", href: "/logout" },
  ]

  return (
    <div className="space-y-8 p-8">
      <h2 className="text-2xl font-bold">Dropdown Examples</h2>

      {/* Example 1: Basic */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Basic Dropdown</h3>
        <Dropdown 
          buttonLabel="Dropdown Menu" 
          items={basicItems}
          buttonClassName="px-4 py-2 bg-[#61223B] text-white rounded hover:bg-[#4E1A2F]"
        />
      </div>

      {/* Example 2: Navigation */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Navigation Dropdown</h3>
        <Dropdown 
          buttonLabel="Programmes" 
          items={navItems}
          buttonClassName="px-4 py-2 bg-[#D22730] text-white rounded hover:bg-[#B01F28]"
        />
      </div>

      {/* Example 3: User Menu */}
      <div>
        <h3 className="text-lg font-semibold mb-2">User Menu Dropdown</h3>
        <Dropdown 
          buttonLabel="Account" 
          items={userMenuItems}
          buttonClassName="px-4 py-2 bg-[#CAA258] text-[#2D2D2D] rounded hover:bg-[#B89148]"
        />
      </div>

      {/* Example 4: Multiple dropdowns in a row */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Multiple Dropdowns</h3>
        <div className="flex gap-4">
          <Dropdown 
            buttonLabel="Menu 1" 
            items={basicItems}
            buttonClassName="px-4 py-2 border-2 border-[#61223B] text-[#61223B] rounded hover:bg-[#61223B] hover:text-white"
          />
          <Dropdown 
            buttonLabel="Menu 2" 
            items={navItems}
            buttonClassName="px-4 py-2 border-2 border-[#61223B] text-[#61223B] rounded hover:bg-[#61223B] hover:text-white"
          />
          <Dropdown 
            buttonLabel="Menu 3" 
            items={userMenuItems}
            buttonClassName="px-4 py-2 border-2 border-[#61223B] text-[#61223B] rounded hover:bg-[#61223B] hover:text-white"
          />
        </div>
      </div>
    </div>
  )
}

/**
 * HOW TO USE IN YOUR COMPONENTS:
 * 
 * 1. Import the Dropdown component:
 *    import Dropdown from "@/components/ui/dropdown"
 * 
 * 2. Define your items array:
 *    const items = [
 *      { label: "Link 1", href: "/link-1" },
 *      { label: "Link 2", href: "/link-2" },
 *    ]
 * 
 * 3. Use the component:
 *    <Dropdown 
 *      buttonLabel="Click Me" 
 *      items={items}
 *      buttonClassName="your-custom-button-classes"
 *    />
 * 
 * FEATURES:
 * - Works on desktop (hover) and mobile (click/tap)
 * - Closes when clicking outside
 * - Closes when selecting an item
 * - Fully accessible with ARIA attributes
 * - Scoped CSS with CSS Modules (no conflicts)
 * - Smooth animations
 * - Customizable button styling
 */
