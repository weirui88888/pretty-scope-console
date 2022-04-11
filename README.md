### pretty-scope-console

class based on the console secondary package, custom log information can be implemented. Inheritance expansion can be performed based on the base class.

#### 支持方法

- log
- warn
- error
- info
- time

#### Usage

```javascript
# install
npm i -S pretty-scope-console

# ESM
import Console from 'pretty-scope-console'

# NODE
const Console = require('pretty-scope-console').default


const prettyConsole = new Console(scope)

prettyConsole.log(msg:string)
prettyConsole.warn(msg:string)
prettyConsole.error(msg:string)
prettyConsole.info(msg:string)
prettyConsole.time(msg:string)

then you can find a console msg with scope

```

#### Usage Scene

You can use it conveniently to distinguish logs in different scenarios

#### Attention

If you want to customize log information, you can try to inherit from this base class

_This is just an example, you can customize the package according to your own actual use scene._

```javascript


import PrettyConsole from 'pretty-scope-console'

class DebuggerYourself extends PrettyConsole {
  public baseStyle: string
  constructor(scope: string, style = 'font-size:12px;font-weight:bold;color:#207806') {
    super(scope)
    this.baseStyle = style
  }

  logger(eventName: string, payload: any, extra = '', flush: string, style?: string) {
    const styleString = style ? style : this.baseStyle

    const extraString = `-eventName:${eventName}-extra:${extra}-实时埋点:${flush}`
    return this._output('log', payload, extraString, styleString)
  }
}

export default DebuggerYourself
```

then you can use it in your code，such as:

```javascript
import DebuggerYourself from "./utils/debug"

const Debug = new DebuggerYourself("debugger")

const imMembership = false

Debug.logger(
  "打开首页",
  {
    名称: "tom",
    成为会员时间: "2022-04-10 12:23:23",
    权限: {
      read: true,
      write: false,
      put: false
    }
  },
  `是否为会员:${imMembership}`,
  "false"
)
```

and then you can see this in console:

```javascript
[ debugger-eventName:打开首页-extra:是否为会员:false-实时埋点:false ]  {名称: 'tom', 成为会员时间: '2022-04-10 12:23:23', 权限: {…}}
```
