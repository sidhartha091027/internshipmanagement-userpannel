export const internships = [
  { id: 'frontend-intern', title: 'Frontend Developer Intern', company: 'Nova Labs', category: 'Technology', location: 'Remote', duration: '3 months', stipend: '₹15,000/month', skills: ['React', 'JavaScript'], description: 'Build accessible product experiences with a supportive product engineering team.' },
  { id: 'product-design', title: 'Product Design Intern', company: 'Orbit Studio', category: 'Design', location: 'Bengaluru', duration: '6 months', stipend: '₹20,000/month', skills: ['Figma', 'Research'], description: 'Help shape user journeys and visual systems for products used by growing teams.' },
  { id: 'marketing-intern', title: 'Digital Marketing Intern', company: 'Brightside', category: 'Marketing', location: 'Hybrid', duration: '4 months', stipend: '₹12,000/month', skills: ['Content', 'Analytics'], description: 'Plan campaigns, learn performance marketing, and grow a modern education brand.' },
  { id: 'data-intern', title: 'Data Analyst Intern', company: 'Vector Finance', category: 'Analytics', location: 'Pune', duration: '6 months', stipend: '₹18,000/month', skills: ['SQL', 'Python'], description: 'Turn business questions into clear analysis and useful decisions.' },
];

export function getInternship(id) { return internships.find((item) => item.id === id); }