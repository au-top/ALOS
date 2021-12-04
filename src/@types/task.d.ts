import { DefineComponent, Ref, ShallowReactive, ShallowUnwrapRef } from "vue";
import { TaskType } from "../core/service/os-task-manage";
import { WindowMode } from "../core/service/window-manage";

declare global {

    type PID = string;
    type PIDMap<T> = Map<PID, T>;
    type PIDTaskMap = PIDMap<Task>;

    interface Task {
        // * 程序 ID
        pid: PID,
        // * APP 包名
        // * [AppDescription.packageID]
        packageID: PackageID,
        // * Task 类型
        type: TaskType
    }

    interface WindowTask extends Task {
        type: TaskType.window,
        windowMode: WindowMode,
        config: WindowComponentModeConfig | WindowFrameModeConfig
    }

    interface WindowFrameModeConfig {
        startUrl: string,
    }

    interface WindowComponentModeConfig {
        component: Ref<DefineComponent>,
    }

    interface WindowFrameTask extends WindowTask {
        windowMode: WindowMode.frame,
        config: WindowFrameModeConfig
    }

    interface WindowComponentTask extends WindowTask {
        windowMode: WindowMode.component,
        config: WindowComponentModeConfig
    }

}