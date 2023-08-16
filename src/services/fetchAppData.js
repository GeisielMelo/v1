import axios from "axios";

export const fetchAppData = async () => {
  try {
    const response = await axios.get("https://example.com/data.json");
    return response;
  } catch (error) {
    return console.error("Erro ao obter JSON:", error);
  }
};
