import { WarnAppPackage } from "../debug/warn";

class OSPackageManage {
    private packageMap: Map<PackageID, AppDescription>;
    constructor() {
        this.packageMap = new Map();
    }
    register = (appDescription: AppDescription) => {
        if (!this.packageMap.has(appDescription.packageID)) {
            this.packageMap.set(appDescription.packageID, appDescription);
        } else {
            WarnAppPackage.taskPackageIDReWrite();
        }
    }

    getAppDescription = (packageID: PackageID): AppDescription | undefined => {
        return this.packageMap.get(packageID);
    }

    getALLAppDescription() {
        return Array.from(this.packageMap.values());
    }

}

export const osPackageManage = new OSPackageManage();

