// Vite bundles source assets and returns their final URLs through this glob.
const mediaAssets = import.meta.glob('./assets/**/*', {
  eager: true,
  query: '?url',
  import: 'default',
})

export const media = (name) => {
  const folder = name.endsWith('.mp4') ? 'videos' : 'images'
  return mediaAssets[`./assets/${folder}/${name}`] ?? ''
}


export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us/' },
  { label: 'Products', href: '/products/' },
  { label: 'Blogs', href: '/blogs/' },
  { label: 'Product Gallery', href: '/product-gallery/' },
  { label: 'Contact Us', href: '/contact-us/' },
]

export const products = [
  {
    name: 'Meter Panel',
    category: 'Power distribution',
    image: 'Untitled-design-2025-07-04T150932.831.webp',
    description: 'Meter Panels are essential for accurate measurement and monitoring of electrical parameters such as voltage, current, power factor, and energy consumption in industrial and commercial establishments. Janani Electricals offers precision-engineered Meter Panels designed for easy installation, safety, and reliable performance. These panels feature high-quality meters and components, ensuring accurate readings and durability in demanding environments.',
  },
  {
    name: 'Power Control Centre',
    category: 'Power distribution',
    image: 'Lroi-13.webp',
    description: 'Power Control Centres are centralised panels used for controlling and distributing power to various equipment and machinery in an industrial setup. Janani Electricals manufactures PCC panels with CPRI-tested, ISO-certified quality standards, designed to handle high electrical loads safely and efficiently. These panels feature advanced protection systems, high-quality switchgear components, and flexible configurations to suit specific operational needs.',
  },
  {
    name: 'Motor Control Centre',
    category: 'Motor & machine control',
    image: 'Untitled-design-2025-07-04T151003.779.webp',
    description: 'Motor Control Centres are designed to control, protect, and manage multiple motors from a centralised location. Janani Electricals’ MCC panels are known for their modular design, ease of maintenance, and operational safety. Equipped with motor starters, overload protection, and control systems, these panels are ideal for industries requiring consistent motor performance and efficient power management.',
  },
  {
    name: 'Machine Control Panels',
    category: 'Motor & machine control',
    image: 'Untitled-design-2025-07-04T151018.637.webp',
    description: 'Machine Control Panels provide dedicated control solutions for industrial machinery, ensuring smooth operation and protection against electrical faults. Janani Electricals offers customised Machine Control Panels tailored to specific machinery requirements. These panels feature user-friendly interfaces, safety interlocks, and high-quality components for optimal machine control and safety.',
  },
  {
    name: 'LT Distribution Panels',
    category: 'Power distribution',
    image: 'Lroi-18.webp',
    description: 'Low Tension (LT) Distribution Panels are essential for distributing power to various lighting, power, and equipment loads in an industrial or commercial setting. Janani Electricals’ LT Distribution Panels are designed for reliability, safety, and efficient power distribution. With built-in protection devices, these panels ensure uninterrupted power supply and safeguard electrical systems from faults and overloads.',
  },
  {
    name: 'Automatic Power Factor Correction Panel',
    category: 'Power quality',
    image: 'Lroi-16.webp',
    description: 'APFC Panels automatically maintain the desired power factor by controlling the operation of capacitor banks, reducing energy losses and improving efficiency. Janani Electricals’ APFC Panels are equipped with intelligent controllers, contactors, and high-quality capacitors, making them ideal for industries with fluctuating load conditions. These panels help lower energy bills and prevent penalties from utility companies.',
  },
  {
    name: 'Distribution Control Panel',
    category: 'Power distribution',
    image: 'Lroi-17.webp',
    description: 'Distribution Control Panels manage the distribution of electrical power to different circuits and equipment within a facility. Janani Electricals’ panels are designed with precision and built using quality components, ensuring operational reliability and safety. They come equipped with monitoring instruments, protection relays, and circuit breakers, making them suitable for various industrial applications.',
  },
  {
    name: 'Auto Mains Failure Panel',
    category: 'Motor & machine control',
    image: 'Lroi-14.webp',
    description: 'AMF Panels automatically switch the power supply from the main grid to a standby generator in case of power failure and revert to the main supply when restored. Janani Electricals’ AMF Panels are engineered for seamless and efficient power transition, featuring automatic changeover switches, generator control systems, and safety mechanisms to ensure uninterrupted power supply in critical operations.',
  },
  {
    name: 'Street Light Poles',
    category: 'Outdoor lighting',
    image: 'Lroi-15.webp',
    description: 'Street Light Poles manufactured by Janani Electricals are designed for durability, stability, and aesthetic appeal. Suitable for highways, industrial complexes, and commercial spaces, these poles are available in various sizes and finishes. Made from high-quality materials, they withstand harsh weather conditions while ensuring reliable street lighting solutions.',
  },
  {
    name: 'Bus Ducts',
    category: 'Power distribution',
    image: 'Untitled-design-2025-07-04T151327.032.webp',
    description: 'Bus Ducts are metallic enclosures containing copper or aluminum busbars used for efficient power distribution within industrial and commercial setups. Janani Electricals designs Bus Ducts with high mechanical strength, safety features, and thermal performance. Ideal for applications with high current ratings, these systems ensure reliable, compact, and maintenance-friendly power distribution.',
  },
  {
    name: 'Rising Mains',
    category: 'Power distribution',
    image: 'Lroi-19.webp',
    description: 'Rising Mains are vertical power distribution systems typically used in multi-storey buildings and industrial facilities. Janani Electricals offers robust and reliable Rising Mains systems featuring insulated busbars, high-grade enclosures, and advanced safety mechanisms. These systems are designed for efficient vertical power distribution with minimal space requirements and easy maintenance.',
  },
]

export const homeProducts = [
  { name: 'Control Panel', image: 'WhatsApp-Image-2025-07-02-at-5.35.44-PM.webp' },
  { name: 'Automation Panel', image: 'WhatsApp-Image-2025-07-02-at-5.35.45-PM.webp' },
  { name: 'Distribution Panel', image: 'WhatsApp-Image-2025-07-02-at-5.35.46-PM.webp' },
  { name: 'Street Light Poles', image: 'WhatsApp-Image-2025-07-02-at-7.00.08-PM.webp' },
]

export const clientNames = [
  'M/s. BGR ENERGY SYSTEMS LTD.',
  'M/s. MILK MIST DIARY PRODUCTS LTD',
  'M/s. VODAFONE LTD',
  'M/s. L&T LTD (CHENNAI METRO RAIL)',
  'M/s. THIRU MAVADI BIO ENERGY PVT LTD',
  'M/s. BGR NEO LTD',
  'M/s. BGR TECH LTD',
  'M/s. CNG OUTLETS – DBS IN OMC RETAIL',
  'M/s. FLSMIDTH LTD',
  'M/s. CPCL',
  'M/s. Aravind ceramics Ltd.',
  'M/s. Die-tech India P. Ltd.',
  'M/s. Spencer Plaza',
  'M/s. MBDL',
  'M/s. Puducherry Mission Hospital',
  'M/s. Sify Ltd.',
  'M/s. Nelson Tech park',
  'M/s. Southern Railway',
  'M/s. A M JAIN COLLEGE',
  'M/s. ALVEAL MALL, Coimbatore',
  'M/s. Vibgyor Automotive Ltd',
  'M/s. India infoline',
  'M/s. North Chennai Thermal Power Station.',
  'M/s. Mettur Thermal Power Station.',
  'M/s. Vijayawada Thermal Power Station.',
  'M/s. Krishnapatnam Thermal Power Project.',
  'M/s. Ghatampur Thermal Power Project.',
  'M/s. KCP College of Engineering.',
  'M/s. Bannari amman sugars Ltd.',
  'M/s. IGCAR, Kalpakkam',
]

export const testimonials = [
  {
    name: 'Arvind Kumar',
    quote: 'We’ve been working with Janani Electricals for over 5 years now. Their quality, timely service, and custom panel solutions have consistently met our expectations. A reliable partner for industrial electrical needs.',
  },
  {
    name: 'Deepa Ramesh',
    quote: 'Excellent customer support and on-time delivery! The team at Janani Electricals is highly professional and always ready to customise products as per project requirements. Highly recommended.',
  },
  {
    name: 'Praveen Rajan',
    quote: 'Janani Electricals delivered CPRI-tested panels for our facility, and we’re very satisfied with the build quality and performance. Great value for money and excellent technical assistance.',
  },
  {
    name: 'Sneha Murthy',
    quote: 'From product quality to pricing and prompt service, Janani Electricals has exceeded our expectations. We look forward to collaborating with them on future projects.',
  },
]

export const processPhotos = [
  { title: 'COIL', image: 'Untitled-design-14-1.webp' },
  { title: 'BALLET SHEET', image: 'Untitled-design.webp' },
  { title: 'LASER CUTTING', image: 'Untitled-design-1.webp' },
  { title: 'FOLDING', image: 'Untitled-design-2.webp' },
  { title: 'FABRICATION', image: 'Untitled-design-3.webp' },
  { title: 'PHOSPHATING', image: 'Untitled-design-4.webp' },
  { title: 'POWDER COATING', image: 'Untitled-design-5.webp' },
  { title: 'ASSEMBLING', image: 'Untitled-design-6.webp' },
  { title: 'WIRING', image: 'Untitled-design-7.webp' },
  { title: 'IR TESTING', image: 'Untitled-design-8.webp' },
  { title: 'HV TESTING', image: 'Untitled-design-9.webp' },
  { title: 'INSULATION TESTING', image: 'Untitled-design-10.webp' },
]
export const companyVideos = [
  { title: 'Company AV', file: 'Untitled-design-1.mp4', poster: '3903-scaled.webp' },
  { title: 'Laser cutting', file: 'Untitled-design.mp4', poster: 'Untitled-design-1.webp' },
  { title: 'Folding', file: 'Untitled-design-2.mp4', poster: 'Untitled-design-2.webp' },
  { title: 'Powder coating', file: 'Untitled-design-3.mp4', poster: 'Untitled-design-5.webp' },
]
export const blogPosts = [
  {
    slug: 'why-janani-electricals-is-the-preferred-choice-for-industrial-electrical-panels',
    title: 'Why Janani Electricals is the Preferred Choice for Industrial Electrical Panels',
    image: 'Heading-34.webp',
    excerpt: 'In the highly competitive industrial sector, choosing the right electrical panel manufacturer is critical for operational success. Companies need partners who offer not just products but reliable, safe, and customised solutions.',
    sections: [
      { heading: 'Legacy of Excellence', paragraphs: ['Founded in 2000 by Mr. C. Thanikaivelan, Janani Electricals has grown from a small manufacturing unit in Chennai to a trusted name in the electrical utility sector. With over two decades of experience, the company has built a reputation for delivering CPRI-tested, ISO-certified electrical control panels.'] },
      { heading: 'Comprehensive Product Range', paragraphs: ['Janani Electricals manufactures a wide variety of panels, including:'], list: ['Meter Panels', 'Power Control Centres', 'Motor Control Centres', 'APFC Panels', 'Bus Ducts & Rising Mains', 'Distribution Control Panels'], after: 'This comprehensive product range enables them to cater to industries like power generation, cement, IT, textiles, and thermal power plants.' },
      { heading: 'Commitment to Quality and Customisation', paragraphs: ['Quality and customisation are the hallmarks of Janani Electricals. The company uses top-grade components from reputed brands like ABB, Siemens, Schneider, and L&T. Every panel is rigorously tested and certified, ensuring durability and safety.', 'Their experienced engineering team collaborates with clients to design and manufacture panels that meet specific operational requirements, ensuring seamless integration with existing systems.'] },
      { heading: 'Trusted by Industry Leaders', paragraphs: ['Over the years, Janani Electricals has partnered with leading companies such as Vodafone, L&T, CPCL, Spencer Plaza, and Southern Railway. This extensive client list is a testament to their reliability and excellence in service.'] },
      { heading: 'Conclusion', paragraphs: ['When it comes to reliable, efficient, and customised electrical panel solutions, Janani Electricals remains the preferred choice for industries across India. Their unwavering commitment to quality, safety, and customer satisfaction makes them a trusted partner in the electrical utility industry.'] },
    ],
  },
  {
    slug: 'how-custom-built-electrical-panels-enhance-industrial-efficiency',
    title: 'How Custom-Built Electrical Panels Enhance Industrial Efficiency',
    image: 'Heading-35.webp',
    excerpt: 'In any industrial setup, operational efficiency is crucial for maintaining productivity, reducing costs, and ensuring the safety of workers and equipment. Custom-built electrical control panels play a vital role in achieving these goals.',
    sections: [
      { heading: 'The Role of Custom Electrical Panels', paragraphs: ['Unlike standard panels, custom-built electrical panels are designed to meet specific operational requirements. They offer tailored features such as:'], list: ['Specialised control systems', 'Safety interlocks', 'Space-saving configurations', 'Enhanced operational flexibility'], after: 'Customisation ensures that the panel integrates seamlessly with existing systems, improving overall operational workflow.' },
      { heading: 'Advantages of Custom-Built Panels', paragraphs: [], list: ['1. Enhanced Efficiency: Tailored designs eliminate unnecessary components, streamlining operations and reducing energy consumption.', '2. Improved Safety: Custom panels can include advanced safety features such as door interlocks and emergency shutdown systems.', '3. Future-Ready Solutions: They can be designed to accommodate future expansions or upgrades.', '4. Reduced Downtime: With features and layouts customised to specific operations, troubleshooting becomes quicker and easier.'] },
      { heading: 'Janani Electricals: Specialists in Custom Panel Manufacturing', paragraphs: ['Since 2000, Janani Electricals has been delivering custom-designed control panels that meet stringent quality and safety standards. Their experienced engineering team works closely with clients to understand their needs and deliver panels that exceed expectations.', 'The company’s infrastructure includes advanced machinery and CAD-based design systems, ensuring precision and efficiency in every product.'] },
      { heading: 'Conclusion', paragraphs: ['Custom-built electrical panels are a smart investment for any industrial operation seeking to enhance efficiency, safety, and long-term reliability. With its commitment to quality and customer satisfaction, Janani Electricals continues to lead the way in providing dependable, custom electrical solutions.'] },
    ],
  },
  {
    slug: 'the-importance-of-quality-electrical-control-panels-in-industrial-applications',
    title: 'The Importance of Quality Electrical Control Panels in Industrial Applications',
    image: 'Heading-36.webp',
    excerpt: 'In today’s rapidly advancing industrial landscape, the demand for reliable and efficient power distribution has never been higher. Electrical control panels act as the backbone of power management systems.',
    sections: [
      { heading: 'What Are Electrical Control Panels?', paragraphs: ['Electrical control panels are crucial components that house electrical devices and allow for the control and monitoring of machinery and equipment. They manage the distribution of power and ensure that industrial operations run smoothly and safely.', 'These panels come in various types, including:'], list: ['Power Control Centres (PCC)', 'Motor Control Centres (MCC)', 'Automatic Power Factor Control (APFC) Panels', 'Distribution Boards', 'Bus Ducts and Rising Mains'], after: 'Each type serves a distinct function, contributing to the safe and reliable operation of electrical systems.' },
      { heading: 'Why Quality Matters', paragraphs: ['Inferior electrical panels can lead to significant problems such as electrical failures, machinery damage, safety hazards, and unplanned downtime. Investing in high-quality, certified panels ensures operational efficiency, safety, and cost-effectiveness.', 'Key benefits of high-quality panels include:'], list: ['Safety Assurance: Reduced risks of short circuits, overloads, and electrical hazards.', 'Operational Efficiency: Smooth operation of machines and reduced downtime.', 'Longevity: Durable components that withstand harsh industrial conditions.', 'Compliance: Adherence to national and international safety standards.'] },
      { heading: 'Why Choose Janani Electricals', paragraphs: ['Janani Electricals has been serving the industry since 2000 with ISO 9001:2015 certified and CPRI-tested panels. With a skilled engineering team and a customer-focused approach, the company delivers tailor-made solutions that meet diverse industrial needs. Their panels are known for quality, timely delivery, and competitive pricing.', 'Industries such as power, cement, textiles, IT, and thermal power plants rely on Janani Electricals for reliable and efficient power solutions.'] },
      { heading: 'Conclusion', paragraphs: ['High-quality electrical control panels are essential for ensuring the safety and efficiency of industrial operations. Janani Electricals continues to be a trusted partner for industries seeking dependable, custom-built electrical solutions.'] },
    ],
  },
]
