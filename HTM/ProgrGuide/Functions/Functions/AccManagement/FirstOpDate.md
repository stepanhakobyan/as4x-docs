﻿<html>
<head>
<title>FirstOpDate</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Функция FirstOpDate</font></strong></p>

<p><font face="Arial">Возвращает дату первой проводки c объектом, 
произведенной в указанных учетах по заданному коду операции.</font></p>

<p class="label"><font face="Arial">Если проводка не найдена, то 
возвращается Null.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><strong><font face="Arial">First</font></strong><font face="Arial"><strong>OpDate 
(</strong><em>AccCode, nISN, </em>[<em>Op</em>]<strong>)</strong></font></p>

<p><font face="Arial">Синтаксис функции </font><strong>
<font face="Arial">First</font></strong><font face="Arial"><strong>OpDate</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%"><font face="Arial"><em>AccCode</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее <a href="../../../Defs/Accounting.html">код учета</a>
    либо массив значений с несколькими кодами учетов, содержащий несколько кодов 
	учета.</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">nISN</font></em></td>
    <td width="71%"><font face="Arial">численное выражение типа Long, 
	определяющее ISN объекта учета, для которого приводится дата</font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">Op</font></em></td>
    <td width="71%"><font face="Arial">необязательное строковое 
	выражение, определяющее <a href="../../../Defs/Accounting.html">код операции</a>, 
	по которому проводится поиск.</font></td>
  </tr>
  </table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><font face="Arial"><a href="LastOpDate.html">См. также</a></font></p>

<p class="label">&nbsp;</p>

<p><font face="Arial"><strong><font size="3">Пример функции First</font>OpDate<br>
<br>
</strong>Пример поиска даты первой операции с объектом в учетах &quot;01&quot; и &quot;02&quot;.</font></p>

<p><font face="Arial">Function FIRSTDAY() <br>
Dim arr<br>
&nbsp;&nbsp;&nbsp;&nbsp; arr(1) = &quot;01&quot;<br>
&nbsp;&nbsp;&nbsp;&nbsp; arr(2) = &quot;02&quot;<br>
&nbsp;&nbsp;&nbsp;&nbsp; FIRSTDAY=<strong>FirstOpDate</strong>(arr, ds(&quot;fISN&quot;))<br>
End Function<br>
</font></p>
</body>
</html>