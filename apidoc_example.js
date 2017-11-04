'use strict';
/**
 * @api {method} path [title]
 * 只有使用@api标注的注释块才会在解析之后生成文档
 * method: 为请求的方法，可以有空格, {POST GET}
 * path: 请求路径
 * title(可选): 可以被解析为(导航菜单@apiGroup)下级菜单
 *
 * @apiDefine name [title] [description]
 *定义重复内容，供其他模块引用，一个模块只能定义一个@apiDefine
 * name: 模块内容
 * title(可选): 模块标题
 * description(可选): 模块描述
 *
 * @apiDeprecated [text]
 * 标记API方法为deprecated
 * text(可选): 描述替代方案
 *
 * @apiDescription text
 * 接口描述内容
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
 * 忽略不发布的文档
 * hint(可选): 不发布的原因
 *
 * @apiName name
 *
 * @apiParam [(group)] [{type}] [field=defaultValue] [description]
 *
 * @apiParamExample [{type}] [title] example
 *
 * @apiPermission name
 *
 * @apiPrivate
 *
 * @apiSampleRequest url
 *
 * @apiSuccess [(group)] [{type}] field [description]
 *
 * @apiSuccessExample [{type}] [title] example
 *
 * @apiUse name
 *
 * @apiVersion version
 *
 *
 * APIDOC 官网: http://apidocjs.com
 */