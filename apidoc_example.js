'use strict';
/**
 * @api {method} path [title]
 * 只有使用@api标注的注释块才会在解析之后生成文档
 * method: 为请求的方法，可以有空格, {POST GET}
 * path: 请求路径
 * title(可选): 可以被解析为(导航菜单@apiGroup)下级菜单
 *
 * @apiDefine name [title] [description]
 *定义重复内容（不包含@api），供其他模块引用，一个模块只能定义一个@apiDefine
 * name: 模块内容
 * title(可选): 模块标题
 * description(可选): 模块描述
 *
 * @apiDeprecated [text]
 * 标记API方法为deprecated
 * text(可选): 描述替代方案
 *
 * @apiDescription text
 * 接口描述内容，支持html语法
 *
 * @apiError [(group)] [{type}] field [description]
 * 请求响应错误参数
 * (group)(可选): 参数会以这个名称分组，默认为Error 4xx
 * {type}(可选): 返回值类型，如{String}{Object}{Number}{Boolean}
 * field: 返回值字段名称
 * description(可选): 返回值字段描述
 *
 * @apiErrorExample [{type}] [title] example
 * 错误返回信息样例
 * {type}(可选): 返回内容的格式
 * [title](可选): 标题
 * example: 样例，注意格式化
 *
 * @apiExample [{type}] title example
 * API测试样例
 * {type}(可选): 请求方式类型
 * title: 标题
 * example:
 *
 * @apiGroup name
 * API分组名称，解析为导航栏菜单
 * name: 组名称，即导航标题
 *
 *@apiHeader [(group)] [{type}] [field=defaultValue] [description]
 * 定义head参数
 * (group)(可选): 分组
 * {type}(可选): 类型
 * [field](可选): 定义变量名称，加上[]则标记变量为可选项
 * =defaultValue(可选): 变量默认值
 * description(可选): 描述
 *
 * @apiHeaderExample [{type}] [title] example
 * head参数样例
 * {type}(可选): 请求方式类型
 * title(可选): 标题
 * example:
 *
 * @apiIgnore [hint]
 * apidoc会忽略使用@apiIgnore标注的接口
 * hint(可选): 不发布的原因
 *
 * @apiName name
 * 定义API名称
 * 在同一个@apiGroup下，名称相同的@api通过@apiVersion区分，
 * 否则后面的@api会覆盖前面定义的@api
 *
 * @apiParam [(group)] [{type}] [field=defaultValue] [description]
 * 定义请求API的参数及参数的解释
 * (group)(可选): 分组，默认为Paramter
 * {type}(可选): 参数类型
 * {type{size}}(可选): 类型限定长度
 *   {string{2..5}} 限定最短2个字符，最长5个字符
 *   {number{100-999}} 限定数字在100-999之间
 * {type=allowedValues}(可选): 类型限定值
 *   {string=”small”}限定只允许传递small字符
 *   {string=”small”,”huge”} 限定只允许传递small或huge字符
 *   {number=1,2,3,99} 限定只允许传1，2，3，99这四个数字
 * field: 变量名
 * [field]: 定义变量，并标记变量是可选项
 * =defaultValue(可选): 参数默认值
 * description(可选): 变量说明
 *
 * @apiParamExample [{type}] [title] example
 * 请求参数样例
 * {type}(可选): 请求方式类型
 * [title](可选): 请求样例标题
 * example: 样例
 *
 * @apiPermission name
 * 定义@api访问权限
 * name: 权限名称，必须独一无二
 *
 * @apiPrivate
 * 定义一个私有的@api，以创建两个API规范文档，一个包含私有APIs，另一个不包含
 *
 * @apiSampleRequest url
 * 设置测试请求form，需先在apidoc.json或package.json中设置了sampleUrl
 * url: 测试服务器URL
 *
 * @apiSuccess [(group)] [{type}] field [description]
 * 请求成功返回的字段
 * (group)(可选): 参数将以这个名称分组，默认为Success 200
 * {type}(可选): 返回值类型
 * field: 返回值字段名称
 * description(可选):  返回值字段描述
 *
 * @apiSuccessExample [{type}] [title] example
 * 请求成功返回数据样例
 * {type}(可选): 请求方式类型
 * title(可选): 标题
 * example: 样例
 *
 * @apiUse name
 * 使用在@apiDefine中定义的内容
 * name: 在@apiDefine中定义的name
 *
 * @apiVersion version
 * 设定API的版本号
 * version: 版本号，格式(major.minor.patch)
 *
 * APIDOC 官网: http://apidocjs.com
 */