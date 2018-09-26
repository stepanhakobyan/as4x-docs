﻿<html>
<head>
<title>Split</title>
</head>

<body>

<p><font size="4" face="Arial"><strong>Функция Split</strong></font></p>

<p><font face="Arial">Возвращает одномерный массив, содержащий 
указанное количество подстрок. Заданная строка разбивается на подстроки по 
заданному разделителю.</font></p>

<p>&nbsp;</p>

<p><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>Split (</strong><em>sExpression, </em>[<em>sDelimiter,
</em>[<em>nCount, </em>[<em>Compare</em>]]]<strong>)</strong></font></p>

<p><font face="Arial">Синтаксис функции <strong>Split</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>sExpression</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее исходную строку, состоящую из слов и разделителей. Если данным 
	аргументом является пустая строка (&quot;&quot;), функция возвращает пустой массив без 
	элементов.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sDelimiter</em></font></td>
    <td width="71%"><font face="Arial">необязательное строковое 
	выражение, определяющее символ разделителя в строке. Она определяет границы 
	подстрок. По умолчанию в качестве разделителя принимается значение &quot; &quot; 
	пробел. Если разделителем является пустая строка (&quot;&quot;), то функция возвращает 
	целиком всю строку, в одном элементе массива. </font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>nCount</em></font></td>
    <td width="71%"><font face="Arial">необязательное численное 
	выражение, определяющее количество возвращаемых подстрок. По умолчанию это 
	(-1), указывающий что возвращаются все существующие подстроки.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>Compare</em></font></td>
    <td width="71%"><font face="Arial">необязательное численное 
	выражение, указывающее на вид сравнения при получении подстрок. </font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Установки</b></font></p>

<p><font face="Arial">Аргумент <em>Compare</em> принимает следующие 
значения:</font></p>

<table border="1" cellPadding="5" cols="3" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="33%"><font face="Arial"><b>Константа</b></font></td>
    <td class="label" width="10%"><font face="Arial"><b>Значение</b></font></td>
    <td class="label" width="57%"><font face="Arial"><b>Описание</b></font></td>
  </tr>
  <tr vAlign="top">
    <td width="33%"><font face="Arial"><b>vbUseCompareOption</b></font></td>
    <td width="10%"><font face="Arial">-1</font></td>
    <td width="57%"><font face="Arial">Производит сравнение в 
	соответствии с установкой <b>Option Compare</b>.</font></td>
  </tr>
  <tr vAlign="top">
    <td width="33%"><font face="Arial"><b>vbBinaryCompare</b></font></td>
    <td width="10%"><font face="Arial">0</font></td>
    <td width="57%"><font face="Arial">Значение по умолчанию. 
	Производится бинарное сравнение.</font></td>
  </tr>
  <tr vAlign="top">
    <td width="33%"><font face="Arial"><b>vbTextCompare</b></font></td>
    <td width="10%"><font face="Arial">1</font></td>
    <td width="57%"><font face="Arial">Производится текстовое 
	сравнение.</font></td>
  </tr>
  <tr vAlign="top">
    <td width="33%"><font face="Arial"><b>vbDatabaseCompare</b></font></td>
    <td width="10%"><font face="Arial">2</font></td>
    <td width="57%"><font face="Arial">Применяется для таблиц 
	Microsoft Access. Производит сравнение на основе хранящейся информации в 
	базе данных.</font></td>
  </tr>
</TBODY>
</table>

<p class="label"><font face="Arial"><b><br>
Примечание</b></font></p>

<p class="label"><a href="Join.html"><font face="Arial">См. также</font></a></p>
</body>
</html>