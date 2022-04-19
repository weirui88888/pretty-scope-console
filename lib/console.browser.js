!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t = "undefined" != typeof globalThis ? globalThis : t || self).PrettyScopeConsole = e())
})(this, function () {
  "use strict"
  return class {
    constructor(t) {
      ;(this.scope = t),
        (this.timers = {}),
        (this.colorMap = { log: "#207806", warn: "#be981e", error: "#f01a1a", info: "#1041db", time: "#9397a6" }),
        (this.styles = { scope: (t) => `font-weight: bold;color: ${this.colorMap[t]}` })
    }
    _output(t, e = "", o = "", s) {
      let { scope: i, styles: r } = this
      try {
        console[t](`%c[ ${i + o} ] `, s || r.scope(t), e)
      } catch (t) {
        console.log(`%c[ ${i + o} ] `, s || r.scope("log"), e)
      }
      return this
    }
    log(t) {
      return this._output("log", t)
    }
    warn(t) {
      return this._output("warn", t)
    }
    error(t) {
      return this._output("error", t)
    }
    info(t) {
      return this._output("info", t)
    }
    clear() {
      return console.clear()
    }
    time(t) {
      return this.timers[t], (this.timers[t] = new Date().getTime()), this
    }
    timeEnd(t) {
      let e = this.timers[t],
        o = ` - time - ${t}`
      return e
        ? this._output("log", e - new Date().getTime() + "ms", o, this.styles.scope("time"))
        : this._output("warn", `${t} is not defined`, o)
    }
  }
}),
  "undefined" != typeof window && (window._PrettyScopeConsole_VERSION_ = "1.0.5")