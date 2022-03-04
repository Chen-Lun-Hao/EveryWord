<%@page pageEncoding="utf-8" %>

    <html>

    <head>
        <meta charset="utf-8">
        <title>第一周作业</title>
    </head>

    <body>
        <fieldset>
            <legend>注册新用户</legend>
            <!-- 表单数据的提交方式维POST -->
            <form action="#" method="post">
                <table cellpadding="2" align="center">
                    <tr>
                        <td align="right">用户名:</td>
                        <td>
                            <!-- 文本输入框 -->
                            <input type="text" name="username" />
                        </td>
                    </tr>
                    <tr>
                        <td align="right">密码:</td>
                        <!-- 密码输入框控件 -->
                        <td><input type="password" name="password" /></td>
                    </tr>
                    <tr>
                        <td align="right">性别:</td>
                        <td>
                            <!-- 单选输入框控件，由于无法输入value，所以预先定义好 -->
                            <input type="radio" name="gender" value="male" />男
                            <input type="radio" name="gender" value="female" />女
                        </td>
                    </tr>
                    <tr>
                        <td align="right">出生年月:</td>
                        <td>
                            <!-- 出生年月输入框 -->
                            <input type="text" name="time" placeholder="1999-01-01" />
                        </td>
                    </tr>
                    <tr>
                        <td align="right">兴趣:</td>
                        <td>
                            <!-- 复选框控件 -->
                            <input type="checkbox" name="interest" value="film" />看电影
                            <input type="checkbox" name="interest" value="novel" />看小说
                            <input type="checkbox" name="interest" value="game" />玩游戏
                        </td>
                    </tr>
                    <tr>
                        <td align="right">最喜欢的课程</td>
                        <td>
                            <select name="classes">
                                <option value="1">3D建模</option>
                                <option value="2">音乐制作</option>
                                <option value="3">动画制作</option>
                                <option value="4">JavaWeb</option>
                                <option value="5">大学英语</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" align="center">
                            <!-- 提交按钮 -->
                            <input type="submit" value="注册" />
                            <!-- 重置按钮，单点后清空当前form -->
                            <input type="reset" value="重填" />
                        </td>
                    </tr>

                </table>
            </form>
        </fieldset>
    </body>

    </html>