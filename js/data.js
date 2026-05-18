const skills = [
  {name:'TypeScript', cat:'Language', icon:'fa-brands fa-js', color:'#3178c6'},
  {name:'JavaScript', cat:'Language', icon:'fa-brands fa-js', color:'#f7df1e'},
  {name:'Python', cat:'Language', icon:'fa-brands fa-python', color:'#3572A5'},
  {name:'React', cat:'Library', icon:'fa-brands fa-react', color:'#61dafb'},
  {name:'Next.js', cat:'Framework', icon:'fa-brands fa-node', color:'#000000'},
  {name:'Express.js', cat:'Framework', icon: "fa-brands fa-node-js", color:'#000000'},
  {name:'PostgreSQL', cat:'Database', icon:'fa-solid fa-database', color:'#336791'},
  {name: 'Firebase', cat:'Database', icon:'fa-solid fa-fire', color: '#ff1c1c'}
];

const projects = [
  {
    title:'StudyBuddy Web App',
    stack:['TypeScript','React','Tailwind','Firebase'],
    date:'2026',
    desc:'Full-stack web app connecting students for collaborative study.',
    github: 'https://study-buddy-app-seven.vercel.app/'
  },
  {
    title:'TV Show Recommender',
    stack:['Python','NumPy','Scikit-Learn','BeautifulSoup','Streamlit'],
    date:'2025',
    desc:'Hybrid recommendation system using KNN with cosine similarity. Tested with data scraped from Reddit & Kaggle datasets',
    github: 'https://github.com/mtaha435/AnimeRecommendationSystem'
  },
  {
    title:'Cloud Mirroring & Failover Recovery System',
    stack:['Go','GCP','Terraform', 'PostgreSQL'],
    date:'2026',
    desc:'A system that connects a local node to a GCP Server. It keeps the server inactive but mirrors data and conducts periodic health checks. When the local database goes offline, the cloud server takes over.',
    github: 'https://github.com/Cloud-Disaster-Recovery-Platform'
  },
  {
    title:'EEG Signal Classifier',
    stack:['Python','Matplotlib','Pandas','NumPy','TensorFlow','Scikit-Learn'],
    date:'2026',
    desc:'Built Traditional ML models (Logistic Regression, Random Forest, Kernel SVM) and Deep Learning Models (1D & 2D CNN) to classify imagined movement via EEG and EOG signals.',
    github: 'https://github.com/mtaha435/ML-Project'
  },
  {
    title:'GSU Registration Script',
    stack:['Python','Selenium'],
    date:'2023',
    desc:'Basic Selenium Script, Accepts CRNs, Registration Date&Time, and Login information to register for classes as soon as registration opens.',
    github: 'https://github.com/mtaha435/GSU-Registration-Bot'
  },
  {
    title: 'Earth Model',
    stack:['JavaScript','Three.js'],
    date:'2024–',
    desc:'Earth model for data visualization (Unfinished)',
    github: 'https://github.com/mtaha435/globe'
  },
  {
    title:'Portfolio Site',
    stack:['JavaScript'],
    date:'2024–',
    desc:'This site!',
    github:'https://mtaha435.github.io/'
  }
];