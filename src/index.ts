const enum ColorMap {
  log = "#207806",
  warn = "#be981e",
  error = "#f01a1a",
  info = "#1041db",
  time = "#9397a6"
}

type ConsoleTypes = keyof typeof ColorMap

interface StyleScope {
  scope: (type: ConsoleTypes) => string
}

class Console {
  public scope: string
  public timers: Record<string, number>
  public colorMap: Record<ConsoleTypes, string>
  public styles: StyleScope

  constructor(scope: string) {
    this.scope = scope

    this.timers = {}

    this.colorMap = {
      log: ColorMap.log,
      warn: ColorMap.warn,
      error: ColorMap.error,
      info: ColorMap.info,
      time: ColorMap.time
    }

    this.styles = {
      scope: (type: ConsoleTypes) => {
        return `font-weight: bold;color: ${this.colorMap[type]}`
      }
    }
  }

  _output(type: ConsoleTypes, message: any = "", extra: string = "", style: string = "") {
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
   * 控制台打印表格
   * @returns {Console}
   * */
  table(data: any, properties?: ReadonlyArray<string>) {
    if (properties) return console.table(data, properties)
    return console.table(data)
  }

  /**
   * 开始计时
   * @param {string} scope - 计时标签
   * @returns {Console}
   * */
  time(scope: ConsoleTypes) {
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
  timeEnd(scope: ConsoleTypes) {
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
