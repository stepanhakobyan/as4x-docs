<html>
<head>
<title>Документ\Грид-таблица\Sort</title>
</head>

<body>

<p><strong><font size="4" face="Arial">Метод Sort<br>
<br>
</font></strong><font face="Arial"><a href="../AsGrid.html">См. также</a>&nbsp;
<u>Пример</u>&nbsp; <a href="../AsGrid.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Сортирует содержание грид-таблицы 
по заданным колонкам.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><em>object.</em><strong>Sort (</strong><em>ParSortCol</em><strong>)</strong></font></p>

<p><font face="Arial">Синтаксис метода <strong>Sort</strong>
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
	ссылкой на грид-таблицу в документе</font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%"><font face="Arial"><em>ParSortCol</em></font></td>
    <td width="71%"><font face="Arial">одномерный массив, задающий 
	идентификаторы колонок и порядок сортировки. Массив состоит максимально до 
	10-и последовательных пар, где первый элемент задает номер (или 
	идентификатор) колонки, а второй элемент задает порядок сортировки значений 
	(0 - по возрастанию, 1 - по убыванию) колонки грид-таблицы. Т.е. в массиве 
	ParSortCol(x1, y1, x2, y2, ..., x10, y10) элемент x<em>i -
    </em>это номер или идентификатор колонки, а y<em>i -</em>
    это порядок сортировки значений колонки. </font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание<br>
<br>
</b>Например, для сортировки первой и четвертой колонок по убыванию, необходимо 
передать массив (0, 0, 3, 0), учитывая при этом, что нумерация колонок 
происходит от 0 до <a href="ColCount.html">ColCount</a> - 1<br>
</font></p>
</body>
</html>