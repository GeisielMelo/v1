import enUS from '../languages/enUS.json';
import ptBR from '../languages/ptBR.json';

const fetchData = async (language) => {
  switch (language) {
    case 'ptBR':
      return ptBR;
    case 'enUS':
      return enUS;
    default:
      return enUS;
  }
};

export { fetchData };
