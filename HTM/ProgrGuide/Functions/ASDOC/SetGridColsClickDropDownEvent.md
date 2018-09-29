<html>
<head>
<title>Документ\SetGridColsClickDropDownEvent</title>
    <style type="text/css">
        .style1
        {
            color: #000000;
        }
        .style2
        {
            color: #000000;
        }
        .style3
        {
            color: #000000;
            text-decoration: none;
        }
    </style>
</head>

<body>

<p><font size="4" face="Arial"><strong>Свойство SetGridColsClickDropDownEvent<br>
</strong></font></p>

<p><font face="Arial"><a href="SetRekvsClickDropDownEvent.html">
См. также</a>&nbsp; 
    <a href="../../Examples/E_SetGridColsClickDropDownEvent.html">Пример</a>&nbsp; <a href="../Asdoc.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Возвращает или устанавливает признак генерации 
    системного события&nbsp; <a
href="../../ScriptProcs/ClickDropDownGrid.html">ClickDropDownGrid</a>
соответственно для указанных столбцов<strong>

</strong>грид-таблицы документа.</font></p>

    <font face="Arial">

<p class="label"><font face="Arial">Свойство для чтения и записи.</font></p>
    <p class="label">&nbsp;</p>

<p class="label"><b><font face="Arial">Синтаксисис</font></b></p>

<p><font face="Arial"><em>object.</em><strong>SetGridColsClickDropDownEvent</stro 
(<em> </strong>(<em>sGridName,</em>

    <a href="../../ScriptProcs/ClickDropDown.html" class="style3">
    <em>sColumnNames</em></a>,
</em>[<em>bValue</em>], [<em>sDelimeter</em>]) </font></p>

<p><font face="Arial">Синтаксис свойства<strong>

    <strong>SetGridColsClickDropDownEvent</strong>
</strong>состоит из следующих частей:</font></p>

    <strong>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">object</font></em></td>
    <td width="71%"><font face="Arial">строковое выражение, являющееся 
	ссылкой на экземпляр объекта типа документ.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sGridName</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее идентификатор грид-таблицы документа, для которого 
	соответственно устанавливается разрешение для генерации системного события
        <a
    href="../../ScriptProcs/ClickDropDownGrid.html">ClickDropDownGrid</a>.</font></td>
  </tr>
  <tr>
    <td width="29%">

    <font face="Arial">

    <a href="../../ScriptProcs/ClickDropDown.html" class="style3">
        <em>sColumnNames</em></td>
    <td width="71%"><font face="Arial">строковое 
	выражение, определяющее идентификаторы столбцов грид-таблицы, для которых свойство будет устанавливать разрешение на генерацию 
	системного события <a href="../../ScriptProcs/ClickDropDownGrid.html">
	ClickDropDownGrid</a>. </font></td>
  </tr>

    </strong>

    <tr>

    <a href="../../ScriptProcs/ClickDropDown.html" class="style1">
        <font face="Arial">

    <strong>
    <td width="29%"><font face="Arial"><em>bValue</em></font></td>
    <td width="71%"><font face="Arial">необязательное логическое выражение, 
        определяющее признак генерации системного события 
        <a
    href="../../ScriptProcs/ClickDropDownGrid.html">ClickDropDownGrid</a>. По умолчанию 
        принимает значени

    <a href="../../ScriptProcs/ClickDropDown.html" class="style3">
        True</a>, при значении которого

    <a href="../../ScriptProcs/ClickDropDown.html" class="style3">
        ядром системы генерируется данное событие</a>.</font></td>

    </strong>
    </font>
    </tr>
    <strong>

    <tr>

    </strong>

    <strong>

    </strong>

    <strong>

    </strong>

    <strong>

    </strong>

    <strong>

    <a href="../../ScriptProcs/ClickDropDown.html" class="style1">
        <font face="Arial">

    <td width="29%"><font face="Arial"><em>sDelimeter<b><br />
        </b>
        </em></font></td>
    <td width="71%"><font face="Arial">необязательное строковое выражение, определяющее 
        любой символ или пробел, через которые задаются&nbsp; столбцы грид-таблицы в sColumnNames. 
        По умолчанию

        задаются с помощью пробелов.</font></td>

    </font></a>
    </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

    </strong>
    <p class="label">&nbsp;<a href="../../ScriptProcs/ClickDropDown.html" 
            class="style3"><strong><font face="Arial"><span class="style2">Примечание</span></font></strong></p>
    <p class="label"><font face="Arial">

    <a href="../../ScriptProcs/ClickDropDown.html" class="style3">
        <span class="style2">&nbsp;&nbsp;&nbsp;Данное свойство применимо только к 
        колонкам&nbsp; грид-таблицы документа. Причем их внутренний тип</span>
    <span class="style2">должен 
быть</span>
        <a href="../../Types/Tree().html">Tree()</a>, <a
href="../../Types/FULLTREE().html">FullTree()</a>
    <span class="style2">или</span> <a href="../../Types/Folder().html">
        Folder()</a>.
    </font>&nbsp;<a href="../../Types/Folder().html">Folder()</a>.</p>
</body>
</html>