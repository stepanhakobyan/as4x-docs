<html>
<head>
<title>Вид просмотра\SQLSort</title>
</head>

<body>

<p><font size="4" face="Arial"><strong>Свойство SQLSort<br>
<br>
</strong></font><font face="Arial"><a href="../Asview.html">См. также</a>&nbsp;
<a href="../../Examples/E_AsView.html">Пример</a>&nbsp; <a href="../Asview.html">
Применяется к</a></font></p>

<p><font face="Arial">Возвращает или устанавливает источник сортировки 
колонок. Источником сортировки колонок в виде просмотра может быть SQL запрос 
источника данных или же описание вида просмотра. В SQL запросе источника данных 
некоторые колонки могут быть отсортированы по Order By ... . Если данное 
свойство <strong>SQLSort</strong>=True, то в виде просмотра порядок сортировки 
колонок будет совпадать с порядком, заданным в SQL запросе источника данных. А 
если <strong>SQLSort</strong>=False, тогда колонки в виде просмотра будут 
отсортированы исходя из описания вида просмотра. Cледует учитывать, что если <strong>
SQLSort</strong>=True, то строчки в виде просмотра будут расположены в порядке 
полученном из источника данных, и при этом, количество сортированных колонок в 
описании вида просмотра должно совпадать с числом сортированных колонок в SQL 
запросе источника данных. Таким образом, данное свойство позволяет избежать 
двойной избыточной сортировки колонок, если оно уже предусмотрено в SQL запросе 
источника данных.</font></p>

<p><font face="Arial">Свойство для чтения и записи.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис<br>
<br>
</b><em>object</em><strong>.SQLSort </strong>[=<em>bValue</em>]&nbsp;</font></p>

<p><font face="Arial">Синтаксис свойства <strong>SQLSort</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>object</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, являющееся 
	ссылкой на экземпляр объекта вида просмотра</font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>bValue</em></font></td>
    <td width="71%"><font face="Arial">логическое выражение, 
	определяющее источник сортировки колонок</font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Установки</b></font></p>

<p><font face="Arial">Установки для <em>bValue</em>
следующие:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Значение</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial">False</font></td>
    <td width="71%"><font face="Arial">Порядок сортировки колонок 
	берется из <a href="../../Defs/View.html">описания вида просмотра</a>, где в 
	описании сортированных колонок задается ключевое слово Order.</font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial">True</font></td>
    <td width="71%"><font face="Arial">Порядок сортировки колонок 
	берется из SQL запроса источника данных, где указывается ключевое выражение 
	Order by ... .</font></td>
  </tr>
</TBODY>
</table>
</body>
</html>