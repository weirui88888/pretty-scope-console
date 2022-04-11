import { PrettyConsole } from "../index.d"

class Console {
  public scope: string
  public timers: Record<string, number>
  public colorMap: Record<PrettyConsole.ConsoleTypes, string>
  public styles: PrettyConsole.StyleScope

  constructor(scope: string) {
    this.scope = scope

    this.timers = {}

    this.colorMap = {
      log: PrettyConsole.ColorMap.log,
      warn: PrettyConsole.ColorMap.warn,
      error: PrettyConsole.ColorMap.error,
      info: PrettyConsole.ColorMap.info,
      time: PrettyConsole.ColorMap.time
    }

    this.styles = {
      scope: (type: PrettyConsole.ConsoleTypes) => {
        return `font-weight: bold;color: ${this.colorMap[type]}`
      }
    }
  }

  _output(type: PrettyConsole.ConsoleTypes, message: string = "", extra: string = "", style: string) {
    let { scope, styles } = this
    try {
      // @ts-ignore
      console[type](`%c[ ${scope + extra} ] `, style || styles.scope(type), message)
    } catch (e) {
      console.log(`%c[ ${scope + extra} ] `, style || styles.scope("log"), message)
    }
    return this
  }

  /**
   * log类型
   * @param {*} message - 输出信息
   * @returns {Console}
   * */
  log(message: string) {
    // @ts-ignore
    return this._output("log", message)
  }

  /**
   * warn类型
   * @param {*} message - 输出信息
   * @returns {Console}
   * */
  warn(message: string) {
    // @ts-ignore
    return this._output("warn", message)
  }

  /**
   * error类型
   * @param {*} message - 输出信息
   * @returns {Console}
   * */
  error(message: string) {
    // @ts-ignore
    return this._output("error", message)
  }

  /**
   * info类型
   * @param {*} message - 输出信息
   * @returns {Console}
   * */
  info(message: string) {
    // @ts-ignore
    return this._output("info", message)
  }

  /**
   * 清空输出
   * @returns {Console}
   * */
  clear() {
    return console.clear()
  }

  /**
   * 开始计时
   * @param {string} scope - 计时标签
   * @returns {Console}
   * */
  time(scope: PrettyConsole.ConsoleTypes) {
    if (!this.timers[scope]) {
      this.timers[scope] = new Date().getTime()
    } else {
      this.timers[scope] = new Date().getTime()
    }
    return this
  }

  /**
   * 停止计时
   * @param {string} scope - 计时标签
   * @returns {Console}
   * */
  timeEnd(scope: PrettyConsole.ConsoleTypes) {
    let timer = this.timers[scope]
    let extra = ` - time - ${scope}`
    if (!timer) {
      // @ts-ignore
      return this._output("warn", `${scope} is not defined`, extra)
    }
    return this._output("log", timer - new Date().getTime() + "ms", extra, this.styles.scope("time"))
  }
}

export default Console
