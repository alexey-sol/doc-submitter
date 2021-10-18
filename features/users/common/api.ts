import Api from "@/Api";

const api = new Api();

export const fetchOneUser = async (id: string) => {
    const response = await api.request("GET", `/users/${id}`);
    return response.body;
};
