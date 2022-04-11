import { PrettyConsole } from "./type.d"

export class Console {
  constructor(name: string)
  _output(type: PrettyConsole.ConsoleTypes, message: string, extra: string, style: string): any
  log(message: string): any
  warn(message: string): any
  error(message: string): any
  info(message: string): any
  clear(): any
  time(scope: PrettyConsole.ConsoleTypes): any
  timeEnd(scope: PrettyConsole.ConsoleTypes): any
}
