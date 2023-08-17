import enUS from '../languages/enUS.json';
import ptBR from '../languages/ptBR.json';

const fetchData = (language) => {
  switch (language) {
    case 'pt-br':
      return ptBR;
    case 'en-us':
      return enUS;
    default:
      return enUS;
  }
};

export { fetchData };
