export default function QRCodeSection() {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* Subtle background with 10% Brilliant Gold tint */}
      <div className="absolute inset-0 bg-[#CAA258] opacity-10" />
      
      {/* S-graphic background pattern */}
      <div className="absolute bottom-0 left-0 h-full opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-06.svg" 
          alt="" 
          className="h-full w-auto object-cover"
        />
      </div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-[#CAA258]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
              Connect & share
            </span>
            <div className="w-12 h-0.5 bg-[#CAA258]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#61223B] mb-6">
            Access our website on the go
          </h2>
          <p className="text-base text-[#4D5356] font-medium max-w-2xl mx-auto">
            Scan or share our QR code to access the Computer Science website on the go. Feel free to print, copy, and distribute.
          </p>
        </div>
        
        {/* QR Code Display */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white p-8 border-2 border-[#E5E5E5]">
          
          {/* QR Code Image */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 border-4 border-[#61223B] bg-white flex items-center justify-center p-2">
              <img 
                src="/images/qr-code.png" 
                alt="QR Code for cs.sun.ac.za"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          {/* Instructions */}
          <div className="flex-grow max-w-md">
            <h3 className="text-xl font-bold text-[#61223B] mb-4">
              How to use
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#61223B] text-white text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <p className="text-sm text-[#4D5356] font-medium">
                  Open your smartphone camera or QR code scanner app
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#61223B] text-white text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <p className="text-sm text-[#4D5356] font-medium">
                  Point your camera at the QR code
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#61223B] text-white text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <p className="text-sm text-[#4D5356] font-medium">
                  Tap the notification to visit our website instantly
                </p>
              </li>
            </ul>
            
            <div className="mt-6 pt-6 border-t border-[#E5E5E5]">
              <p className="text-xs text-[#4D5356] font-medium">
                You can download and print this QR code for posters, flyers, or promotional materials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
