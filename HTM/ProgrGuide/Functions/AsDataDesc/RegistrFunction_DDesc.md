<html>
<head>
<title>AsDataDesc\RegistrFunction</title>
</head>

<body>

<p><font size="4" face="Arial"><strong>Метод RegistrFunction<br>
<br>
</strong></font><font face="Arial"><a href="../AsDataDesc.html">См. 
также</a>&nbsp; <u>Пример</u>&nbsp; <a href="../AsDataDesc.html">Применяется 
к</a></font></p>

<p><font face="Arial">Добавляет в контекстное меню динамического дерева вызов пользовательской функции.</font></p>

<p><font face="Arial">Свойство для чтения. </font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><em>object.</em><strong>RegistrFunction[</strong><em>sCaption, sRunSub, 
    sAccessCode, sParentId, [sECaption], [sAvailableFor], 
    [sFuncParam]</em><strong>]</strong></font></p>

<p><font face="Arial">Синтаксис метода <strong>RegistrFunction</strong>
состоит из следующих частей:</font></p>

    <table border="1" cellpadding="5" cols="2" frame="below" rules="rows">
        <tr valign="top">
            <td class="label" width="29%">
                <font face="Arial"><b>Параметр</b></font></td>
            <td class="label" width="71%">
                <font face="Arial"><strong>Описание</strong></font></td>
        </tr>
        <tr>
            <td width="29%">
                <em><font face="Arial">object</font></em></td>
            <td width="71%">
                <font face="Arial">обязательное строковое выражение, являющееся ссылкой на 
                экземпляр объекта типа динамическое дерево.</font></td>
        </tr>
        <tr>
            <td width="29%">
                <em><font face="Arial">sCaption</font></em></td>
            <td width="71%">
                <font face="Arial">обязательное строковое выражение, определяющее наименование 
                добавляемой функции.</font></td>
        </tr>
        <tr>
            <td width="29%">
                <font face="Arial"><em>sRunSub</em></font></td>
            <td width="71%">
                <font face="Arial">необязательное строковое выражение, определяющее &quot;имя 
                модуля.имя функции&quot;, вызываемого при выборе данной функции в 
                контекстном меню. Если данный параметр не задан, то в контекстное меню 
                добавляется разделитель.</font></td>
        </tr>
        <tr>
            <td width="29%">
                <font face="Arial"><em>sAccessCode</em></font></td>
            <td width="71%">
                <font face="Arial">необязательное строковое выражение, определяющее 
                идентификаторы рабочих мест на которых срабатывает данный вызов. При 
                перечислении нескольких идентификаторов АРМ-ов они отделяются друг от друга 
                символами &quot;;&quot;. Для пользователя, имеющего доступ хотя бы к одному из 
                перечисленных АРМ-ов, данная функция будет доступна из всех АРМ-ов (даже не 
                перечисленных!), где данный документ фигурирует.</font></td>
        </tr>
        <tr>
            <td width="29%">
                <font face="Arial"><em>sParentId</em></font></td>
            <td width="71%">
                <font face="Arial">необязательное строковое 
	выражение, определяющее ссылку <a
    href="RegistrNode_DDesc.html">на идентификатор вышестоящего подменю</a> контекстных 
	вызовов.</font></td>
        </tr>
        <tr>
            <td width="29%">
                <font face="Arial"><em>sECaption</em></font></td>
            <td width="71%">
                <font face="Arial">необязательное строковое выражение, определяющее наименование 
                добавляемой функции на иностранном языке.</font></td>
        </tr>
        <tr>
            <td width="29%">
                <font face="Arial"><em>sAvailableFor</em></font></td>
            <td width="71%">
                <font face="Arial">необязательное численное
	выражение, определяющее 
	<a href="../../Constants/const_RegistrFunctionAvailability.html">константу 
	видимости и иконку</a> контекстного меню.</font></td>
        </tr>
        <tr>
            <td width="29%">
                <font face="Arial"><em>sFuncParam</em></font></td>
            <td width="71%">
                <font face="Arial">необязательное выражение типа Variant, определяющее параметр 
                для функции заданной параметром <em>RunSub.</em></font></td>
        </tr>
    </table>
    <p>
        &nbsp;</p>
</body>
</html>