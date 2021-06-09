module.exports = {
  root: true,
  env: {
    node: true
  },
  extends:['eslint:recommended','plugin:vue/vue3-recommended'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  // https://eslint.vuejs.org/rules/
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 多个特性的元素应该分多行撰写，每个特性一行
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 10, // 单行的情况下可以接受的数量
        multiline: {
          max: 1,       // 多行的情况下，每行可接受的数量
          allowFirstLine: false // 不允许在多行的情况下第一行有属性
        }
      }
    ],
    // 在单行元素的内容前后需要换行符
    'vue/singleline-html-element-content-newline': 'off',
    // 在多行元素的内容之前和之后需要换行符
    'vue/multiline-html-element-content-newline': 'off',
    // JS/JSX中的组件名应该始终是帕斯卡命名法
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/no-v-html': 'off',
    // 定义对象的set存取器属性时，强制定义get
    'accessor-pairs': 2,
    // 在箭头函数之前/之后需要空格
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    // 语句块是否需要空格
    'block-spacing': [2, 'always'],
    // if while function { 必须在同一行。
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    // 是否需要驼峰命名
    camelcase: [
      0,
      {
        properties: 'always'
      }
    ],
    // 禁止使用尾随逗号,最后一个属性是不需要逗号
    'comma-dangle': [2, 'never'],

    // 强制逗号旁边的间距 左右一个空格
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    // 控制逗号在行尾出现还是在行首出现
    // https://eslint.org/docs/rules/comma-style
    'comma-style': [2, 'last'],
    // 强制在子类构造函数中用super()调用父类构造函数，TypeScrip的编译器也会提示
    'constructor-super': 2,
    // 强制所有控制语句使用一致的括号风格
    // https://eslint.org/docs/rules/curly
    curly: [2, 'multi-line'],

    // 对象访问符的位置，换行的时候在行首还是行尾
    // https://eslint.org/docs/rules/dot-location#top
    'dot-location': [2, 'property'],
    // 文件末尾强制换行
    'eol-last': 2,
    // 是否使用全等 ===
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    // 强制执行回调错误处理
    'handle-callback-err': [2, '^(err|error)$'],
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    // / 强制在JSX文件中一致使用单引号
    'jsx-quotes': [2, 'prefer-single'],
    // 对象字面量中冒号的前后空格
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    // 关键字前后强制执行一致的间距
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    // 构造函数名称以大写字母开头
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false
      }
    ],
    // 调用不带参数的函数时需要括号
    'new-parens': 2,
    // 禁止使用数组构造器
    'no-array-constructor': 2,
    // 禁止使用arguments.caller或arguments.callee
    'no-caller': 2,
    // 禁止给类赋值
    'no-class-assign': 2,
    // 禁止在条件表达式中使用赋值语句
    'no-cond-assign': 2,
    // 禁止修改const声明的变量
    'no-const-assign': 2,
    // 正则表达式中使用控制字符
    'no-control-regex': 0,
    // 不能对var声明的变量使用delete操作符
    'no-delete-var': 2,
    // 函数参数不能重复
    'no-dupe-args': 2,
    // 禁止在类成员中命名重复
    'no-dupe-class-members': 2,
    // 在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-dupe-keys': 2,
    // switch中的case标签不能重复
    'no-duplicate-case': 2,
    // 正则表达式中的[]内容不能为空
    'no-empty-character-class': 2,
    // 禁止使用空解构模式
    'no-empty-pattern': 2,
    // 禁止使用eval
    'no-eval': 2,
    // 禁止给catch语句中的异常参数赋值
    'no-ex-assign': 2,
    // 禁止扩展原生对象
    'no-extend-native': 2,
    // 禁止不必要的函数绑定
    'no-extra-bind': 2,
    // 禁止不必要的bool转换
    'no-extra-boolean-cast': 2,
    // 禁止非必要的括号
    'no-extra-parens': [2, 'functions'],
    // 禁止switch穿透
    'no-fallthrough': 2,
    // 禁止省略浮点数中的0 .5 3.
    'no-floating-decimal': 2,
    // 禁止重复的函数声明
    'no-func-assign': 2,
    // 禁止使用隐式eval
    'no-implied-eval': 2,
    // 禁止在块语句中使用声明（变量或函数）
    'no-inner-declarations': [2, 'functions'],
    // 禁止无效的正则表达式
    'no-invalid-regexp': 2,
    // 不能有不规则的空格
    'no-irregular-whitespace': 2,
    // 禁止使用iterator 属性
    'no-iterator': 2,
    // label名不能与var声明的变量名相同
    'no-label-var': 2,
    // 禁止标签声明
    'no-labels': [
      2,
      {
        allowLoop: false,
        allowSwitch: false
      }
    ],
    // 禁止不必要的嵌套块
    'no-lone-blocks': 2,
    // 禁止混用tab和空格
    'no-mixed-spaces-and-tabs': 2,
    // 不能用多余的空格
    'no-multi-spaces': 2,
    // 字符串不能用\换行
    'no-multi-str': 2,
    // 空行最多不能超过2行
    'no-multiple-empty-lines': [
      2,
      {
        max: 1
      }
    ],
    // 不能重写native对象
    'no-native-reassign': 2,
    // in 操作符的左边不能有!
    'no-negated-in-lhs': 2,
    // 禁止使用new Object()
    'no-new-object': 2,
    // 禁止使用new require
    'no-new-require': 2,
    // 禁止使用new symbol
    'no-new-symbol': 2,
    // 禁止使用new创建包装实例，new String new Boolean new Number
    'no-new-wrappers': 2,
    // 不能调用内置的全局对象，比如Math() JSON()
    'no-obj-calls': 2,
    // 禁止使用八进制数字
    'no-octal': 2,
    // 禁止使用八进制转义序列
    'no-octal-escape': 2,
    // node中不能使用__dirname或_filename做路径拼接
    'no-path-concat': 2,
    // 禁止使用proto属性
    'no-proto': 2,
    // 禁止重复声明变量
    'no-redeclare': 2,
    // 禁止在正则表达式字面量中使用多个空格 /foo bar/
    'no-regex-spaces': 2,
    // return 语句中不能有赋值表达式
    'no-return-assign': [2, 'except-parens'],
    // 禁止自我赋值
    'no-self-assign': 2,
    // 不能比较自身
    'no-self-compare': 2,
    // 禁止使用逗号运算符
    'no-sequences': 2,
    // 严格模式中规定的限制标识符不能作为声明时的变量名使用
    'no-shadow-restricted-names': 2,
    // 函数调用时 函数名与()之间不能有空格
    'no-spaced-func': 2,
    // 禁止稀疏数组， [1,,2]
    'no-sparse-arrays': 2,
    // 在调用super()之前不能使用this或super
    'no-this-before-super': 2,
    // 禁止抛出字面量错误 throw "error";
    'no-throw-literal': 2,
    // 一行结束后面不要有空格
    'no-trailing-spaces': 2,
    // 不能有未定义的变量
    'no-undef': 2,
    // 变量初始化时不能直接给它赋值为undefined
    'no-undef-init': 2,
    // 避免多行表达式
    'no-unexpected-multiline': 2,
    // 检查引用是否在循环中被修改
    'no-unmodified-loop-condition': 2,
    // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-unneeded-ternary': [
      2,
      {
        defaultAssignment: false
      }
    ],
    // 不能有无法执行的代码
    'no-unreachable': 2,
    // 禁止finally块中的控制流语句
    'no-unsafe-finally': 2,
    // 不能有声明后未被使用的变量或参数
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none'
      }
    ],
    // 禁止不必要的call和apply
    'no-useless-call': 2,
    // 禁止在对象上使用不必要的计算属性键
    'no-useless-computed-key': 2,
    // 禁止不必要的构造方法
    'no-useless-constructor': 2,
    // 不必要的转义用法
    'no-useless-escape': 0,
    // 在属性之前禁止空格
    'no-whitespace-before-property': 2,
    // 禁用with
    'no-with': 2,
    // 连续声明
    'one-var': [
      2,
      {
        initialized: 'never'
      }
    ],
    // 换行时运算符在行尾还是行首
    'operator-linebreak': [
      2,
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before'
        }
      }
    ],
    // 块语句内行首行尾是否要空行
    'padded-blocks': [2, 'never'],
    // 引号类型 `` "" ''
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    // 语句强制分号结尾
    semi: [2, 'never'],
    // 分号前后空格
    'semi-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    // 不以新行开始的块{前面要不要有空格
    'space-before-blocks': [2, 'always'],
    // 函数定义时括号前面要不要有空格
    'space-before-function-paren': [2, 'never'],
    // 小括号里面要不要有空格
    'space-in-parens': [2, 'never'],
    // 中缀操作符等周围要不要有空格
    'space-infix-ops': 2,
    // 一元运算符的前或后要不要加空格
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false
      }
    ],
    // 注释风格
    'spaced-comment': [
      2,
      'always',
      {
        markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
      }
    ],
    // 禁止模板字符串中的嵌入表达式周围空格的使用
    'template-curly-spacing': [2, 'never'],
    // 禁止比较时使用NaN，只能用isNaN()
    'use-isnan': 2,
    // 必须使用合法的typeof的值
    'valid-typeof': 2,
    // 立即执行函数表达式的小括号风格
    'wrap-iife': [2, 'any'],
    // 强制在 yield* 表达式中 * 周围使用空格
    'yield-star-spacing': [2, 'both'],
    // 禁止尤达条件
    yoda: [2, 'never'],
    // 首选const
    'prefer-const': 2,
    // 大括号内是否允许不必要的空格
    'object-curly-spacing': [
      2,
      'always',
      {
        objectsInObjects: false
      }
    ],
    // 是否允许非空数组里面有多余的空格
    'array-bracket-spacing': [2, 'never']
  },
}
