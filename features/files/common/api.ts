import Api from "@/Api";

const api = new Api();

export const fetchFiles = async () => {
    const response = await api.request("GET", "/files");
    return response.body;
};
