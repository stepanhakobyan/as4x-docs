﻿<html>
<head>
<title>Data Definition</title>
<style type="text/css">
.style1 {
	text-decoration: underline;
}
.style3 {
	border-width: 0;
}
.style4 {
	border: 1px solid #C5C5C5;
}
.style5 {
	font-style: italic;
	border: 1px solid #C5C5C5;
}
.style6 {
	font-weight: bold;
	border: 1px solid #C5C5C5;
}
</style>
</head>

<body>

<p><font size="4" face="Arial"><strong>Описание источника данных</strong></font></p>

<p class="label"><font face="Arial">&nbsp;<a href="doc.html">Документы</a> в системе хранятся в папках. Для отображения содержимого папок 
используются источники данных со своими колонками и запросами формирования 
содержимого колонок. В скриптовом разделе описания могут описываться как <a href="../scriptstproced.html">
обработчики системных событий</a>, так и пользовательские функции и процедуры. 
Источник данных в дальнейшем служит базисом для построения многочисленных <a href="View.html">
видов просмотра</a>.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<font face="Arial"><strong>DATA</strong> {<strong><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Name</strong> = <em>
sDataName</em>;
<strong><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Caption</strong> = <em>sDataCaption</em>; <br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;ECaption </strong>=<strong> </strong><em>sDataECaption</em>; <strong>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SQL</strong>
= <em>sDataSQL</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;UpdateSQL</strong> = <em>sDataUpdSQL</em>;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Indicate</strong>
= <em>nIndPresent</em>;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DefaultFunction</strong> = <em>sFuncName</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Version</strong> = <em>nVersion</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; QueryTimeout </strong> = <em>nQueryTimeout</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ArrayBased</strong> = <em>nArrayBased</em>;<br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ISN </strong>=<strong> </strong><em>nISN</em><strong>;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DisableValidFunction </strong>=<strong> </strong><em>nValueDisable</em><strong>;<br>
&nbsp;&nbsp;&nbsp; <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>
{<span lang="ru" class="style1"><em><a href="../column.html">Описания колонок 
источника данных</a></em></span>}<strong>;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>
{<a href="../Param.html"><span lang="ru" class="style1"><em>Параметры SQL</em></span><em><span class="style1">-запроса 
источника данных</span></em></a>};<strong><br>
&nbsp;&nbsp;&nbsp;&nbsp;</strong><br>
<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Script</strong> {<br>
<font color="#000000">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Subs and Functions</i></font><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;};<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; };<br>
</font>

<p><font face="Arial">Синтаксис описания источника данных состоит из 
следующих частей:</font></p>

<table cellPadding="5" cols="2" frame="below" rules="rows" class="style3">
<TBODY>
  <tr vAlign="top">
    <td class="style3" style="height: 33px"></td>
    <td class="style6" width="29%" style="height: 33px"><font face="Arial">Параметр</font></td>
    <td class="style4" width="71%" style="height: 33px"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td class="style4"><img src="../../../IMAGES/pubfield.gif"></td>
    <td width="29%" class="style4"><font face="Arial"><em>sDataName</em></font></td>
    <td width="71%" class="style4"><font face="Arial">строковое выражение, 
	определяющее идентификатор источника данных</font></td>
  </tr>
  <tr>
    <td class="style4"><img src="../../../IMAGES/pubfield.gif"></td>
    <td width="29%" class="style4"><font face="Arial"><em>sDataCaption</em></font></td>
    <td width="71%" class="style4"><font face="Arial">строковое выражение, 
	определяющее наименование-заголовок<br>
    источника данных </font></td>
  </tr>
  <tr>
    <td class="style4"><img src="../../../IMAGES/pubfield.gif"></td>
    <td width="29%" class="style4"><font face="Arial"><em>sDataECaption</em></font></td>
    <td width="71%" class="style4"><font face="Arial">строковое выражение, 
	определяющее наименование-заголовок<br>
    источника данных на иностранном языке.</font></td>
  </tr>
  <tr>
    <td class="style4"><img src="../../../IMAGES/pubfield.gif"></td>
    <td width="29%" class="style4"><font face="Arial"><em>sDataSQL</em></font></td>
    <td width="71%" class="style4"><font face="Arial">строковое выражение, 
	определяющее SQL запрос для выборки определенных строк из таблицы. Если 
	данный параметр опущен и ArrayBased=0, то выполняется обработчик <a href="../ScriptProcs/SQL.html">
	события SQL</a>.</font></td>
  </tr>
  <tr>
    <td class="style4"><img src="../../../IMAGES/pubfield.gif"></td>
    <td width="29%" class="style4"><font face="Arial"><em>sDataUpdSQL</em></font></td>
    <td width="71%" class="style4"><font face="Arial">строковое выражение, 
	определяющее обновляющий SQL запрос для выборки нужных строк из таблицы, 
	после добавления, удаления или корректировки строчки. Если данный параметр 
	опущен ArrayBased=0, то выполняется обработчик <a
    href="../ScriptProcs/SQL.html">события SQL</a>.</font></td>
  </tr>
  <tr>
    <td class="style4"><img src="../../../IMAGES/pubfield.gif"></td>
    <td width="29%" class="style4"><font face="Arial"><em>nIndPresent</em></font></td>
    <td width="71%" class="style4"><font face="Arial">необязательное численное 
	выражение, определяющее внешний вид индикации открытия источника данных. Оно 
	принимает значения 0 (появляются только песочные часы), 1 (появляется 
	индикатор продвижения выполнения запроса), 2 (отсутствуют песочные часы и 
	индикатор). Значением по умолчанию является 0.</font></td>
  </tr>
  <tr>
    <td class="style4"><img src="../../../IMAGES/pubfield.gif"></td>
    <td width="29%" class="style4"><font face="Arial"><em>nVersion</em></font></td>
    <td width="71%" class="style4"><font face="Arial">численное выражение целого 
	типа, определяющее номер версии описания источника данных</font></td>
  </tr>
  <tr>
    <td style="height: 86px" class="style4">
	<img src="../../../IMAGES/pubfield.gif"></td>
    <td width="29%" class="style4" style="height: 86px"><font face="Arial"> <em>nQueryTimeout</em></font></td>
    <td width="71%" class="style4" style="height: 86px"><font face="Arial">необязательное численное 
	выражение целого типа, определяющее время ожидания в секундах при выполнении 
	SQL запроса. Может принимать значение от 1 до 3000. Если данный параметр 
	опущен, то время ожидания - 300 секунд. </font></td>
  </tr>
  <tr>
    <td class="style4"><img src="../../../IMAGES/pubfield.gif"></td>
    <td width="29%" class="style4"><font face="Arial"> <em>nArrayBased</em></font></td>
    <td width="71%" class="style4"><font face="Arial">необязательное числовое 
	выражение, принимающее значения 1 или 0, определяющее является ли источник 
	данных основанным на SQL запросе (ArrayBased=0) или на объекте типа XArrayDB 
	(ArrayBased=1). По умолчанию принимает значение 0. Если значение выражения 
	равно 1, то обязательно должно быть обработано событие <a href="../ScriptProcs/Load.html">
	Load</a>.</font></td>
  </tr>
	<tr>
    <td class="style4"><img src="../../../IMAGES/pubfield.gif"></td>
    <td width="29%" class="style4"><font face="Arial"> <em>n</em></font><em><font face="Arial">ISN</font></em></td>
    <td width="71%" class="style4"><font face="Arial">необязательное строковое 
	выражение, определяющее идентификатор колонки соответсвующий ISN документа. 
	Если данное свойство опущено, то за колонку ISN принимается колонка со 
	значением свойства
	<strong style="font-weight: 400">Field равным fISN (если таковая кочно 
	имеется).</strong></font></td>
  </tr>
  <tr>
    <td class="style4"><img src="../../../IMAGES/pubfield.gif"></td>
    <td width="29%" class="style4"><font face="Arial"><em>nValueDisable</em></font></td>
    <td width="71%" class="style4"><font face="Arial">необязательное числовое 
	выражение. Значение 1 позволяет блокировать вызов события
	<a href="../ScriptProcs/Valid_Data.html">Valid</a> источника данных<strong style="font-weight: 400">.</strong></font></td>
  </tr>
  <tr>
    <td class="style4"><img src="../../../IMAGES/pubfield.gif"></td>
    <td width="29%" class="style4"><font face="Arial"><em>sFuncName</em></font></td>
    <td width="71%" class="style4"><font face="Arial">строковое выражение, 
	определяющее имя контекстно-вызываемой процедуры при двойном щелчке мыши 
	либо при нажатии клавиши Enter.</font></td>
  </tr>
</TBODY>
  <tr>
    <td class="style4">
	<img src="../../../IMAGES/pubmethod.gif" width="16" height="11"></td>
    <td width="29%" class="style5"><font color="#000000" face="Arial">Subs and 
	Functions</font></td>
    <td width="71%" class="style4"><font face="Arial">скриптовый раздел описания, 
	который может содержать как <a
    href="../scriptstproced.html">обработчики системных событий</a>, так и 
	пользовательские процедуры и функции</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Установки</b></font></p>

<p><font face="Arial">Установки для <em>sFuncName</em>
следующие:</font></p>

<table cellPadding="5" cols="2" frame="below" rules="rows" class="style3">
<TBODY>
  <tr vAlign="top">
    <td class="style4" width="29%" style="height: 33px"><font face="Arial"><strong>Значение</strong></font></td>
    <td class="style4" width="71%" style="height: 33px"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%" class="style4"><font face="Arial"><strong><em>EDITITEM</em></strong></font></td>
    <td width="71%" class="style4"><font face="Arial">документ вызывается в режиме 
	корректировки</font></td>
  </tr>
  <tr>
    <td width="29%" class="style4"><font face="Arial"><strong><em>VIEWITEM</em></strong></font></td>
    <td width="71%" class="style4"><font face="Arial">документ вызывается в режиме 
	просмотра</font></td>
  </tr>
  <tr>
    <td width="29%" class="style4"><font face="Arial"><em><strong>DELETEITEM</strong></em></font></td>
    <td width="71%" class="style4"><font face="Arial">документ вызывается для 
	удаления</font></td>
  </tr>
  <tr>
    <td width="29%" class="style4"><font face="Arial"><strong><em>VISAITEM</em></strong></font></td>
    <td width="71%" class="style4"><font face="Arial">документ вызывается для 
	визирования</font></td>
  </tr>
  <tr>
    <td width="29%" class="style4"><font face="Arial"><strong><em>SECONDENTRYITEM</em></strong></font></td>
    <td width="71%" class="style4"><font face="Arial">документ вызывается для 
	повторного ввода</font></td>
  </tr>
  <tr>
    <td width="29%" class="style4"><font face="Arial"><strong><em>другое значение</em></strong></font></td>
    <td width="71%" class="style4"><font face="Arial">вызывается пользовательская 
	процедура, указанная как контекстно-вызываемая (т.е. указана в 
	RegistrFunction).</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><font face="Arial">Параметры служат для подстановки в 
SQL запрос. Но иногда число параметров в источнике данных может превышать число 
параметров, необходимых для подстановки в SQL запрос.</font></p>

<p class="label"><font face="Arial"><a href="../Defs.html">См. также</a></font></p>

<p class="label">&nbsp;</p>
</body>
</html>