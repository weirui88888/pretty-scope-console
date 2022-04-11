### 基于 console 二次封装的类

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

prettyConsole.log()
prettyConsole.warn()
prettyConsole.error()
prettyConsole.info()
prettyConsole.time()

then you can find a console msg with scope

```

#### Usage Scene

You can use it conveniently to distinguish logs in different scenarios
