import nodeEnvConst from "@/utils/const/nodeEnv";
import config from "@/utils/config";

export class Env {
    constructor(private env = process.env) {}

    isProduction(): boolean {
        return config.nodeEnv === nodeEnvConst.PRODUCTION;
    }
}
