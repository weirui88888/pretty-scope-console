declare const enum ColorMap {
    log = "#207806",
    warn = "#be981e",
    error = "#f01a1a",
    info = "#1041db",
    time = "#9397a6"
}
declare type ConsoleTypes = keyof typeof ColorMap;
interface StyleScope {
    scope: (type: ConsoleTypes) => string;
}
declare class Console {
    scope: string;
    timers: Record<string, number>;
    colorMap: Record<ConsoleTypes, string>;
    styles: StyleScope;
    constructor(scope: string);
    _output(type: ConsoleTypes, message?: any, extra?: string, style?: string): this;
    /**
     * log类型
     * @param {*} message - 输出信息
     * @returns {Console}
     * */
    log(message: string): this;
    /**
     * warn类型
     * @param {*} message - 输出信息
     * @returns {Console}
     * */
    warn(message: string): this;
    /**
     * error类型
     * @param {*} message - 输出信息
     * @returns {Console}
     * */
    error(message: string): this;
    /**
     * info类型
     * @param {*} message - 输出信息
     * @returns {Console}
     * */
    info(message: string): this;
    /**
     * 清空输出
     * @returns {Console}
     * */
    clear(): void;
    /**
     * 控制台打印表格
     * @returns {Console}
     * */
    table(data: any, properties?: ReadonlyArray<string>): void;
    /**
     * 开始计时
     * @param {string} scope - 计时标签
     * @returns {Console}
     * */
    time(scope: ConsoleTypes): this;
    /**
     * 停止计时
     * @param {string} scope - 计时标签
     * @returns {Console}
     * */
    timeEnd(scope: ConsoleTypes): this;
}
export default Console;
