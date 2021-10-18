import superagent from "superagent";
import config from "@/utils/config";

const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMmM0Y2YwODMtOGZiNi00NWVkLWEyNWQtMjc1ZDYwMWFlOTQ2IiwiZXhwaXJlcyI6IjIwMjEtMTAtMTdUMTQ6MTU6MjEuNjc0OTIwIn0.eujXDUx59vrKsr8n3Sv7sEvEmU-Uc0QUw8PoiUhYW1I"; // TODO get token from storage

type Method = "GET" | "POST" | "PUT" | "DELETE";
type FormattedMethod = Lowercase<Method>;

class Api {
    constructor(private baseUrl = config.webUrl) {
        this.baseUrl = baseUrl;
    }

    request(method: Method, path?: string) {
        const formattedMethod = method.toLowerCase() as FormattedMethod;
        const url = this.baseUrl + path;

        return superagent[formattedMethod](url)
            .set("Authorization", `Bearer ${accessToken}`);
    }
}

export default Api;
