export namespace PrettyConsole {
  enum ColorMap {
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
}
