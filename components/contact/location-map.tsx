export default function LocationMap() {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute top-0 right-0 h-full w-auto max-w-[40%] opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-05.svg" 
          alt="" 
          className="h-full w-auto object-cover object-right"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
            Want to pay us a visit?
          </h2>
          <p className="text-base sm:text-lg text-[#4D5356] font-medium max-w-3xl mx-auto">
            The department is currently located on the fifth floor of the General Engineering building.
          </p>
        </div>
        
        {/* Map Container with Unique Shape */}
        <div className="max-w-5xl mx-auto">
          <div 
            className="w-full h-[500px] overflow-hidden border-4 border-[#E5E5E5]"
            style={{ borderBottomRightRadius: '4rem' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.4447891234567!2d18.865305!3d-33.925250!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU1JzMwLjkiUyAxOMKwNTEnNTUuMSJF!5e0!3m2!1sen!2sza!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Computer Science Department Location"
            />
          </div>
          
          {/* Coordinates Info */}
          <div className="mt-6 text-center">
            <p className="text-sm text-[#4D5356] font-medium">
              Coordinates: 33° 55′ 30.90″ South, 18° 51′ 55.10″ East
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
