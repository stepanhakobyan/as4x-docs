﻿<html>
<head>
<title>Таблица JOBSETELEM</title>
</head>

<body>

<h1><font size="4" face="Arial">Таблица JOBSETELEM</font></h1>

<p><font face="Arial">Таблицa элементов задания.<br>
</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="20%"><font face="Arial"><b>Поле</b></font></td>
    <td class="label" width="20%"><font face="Arial"><strong>Тип 
	данных</strong></font></td>
    <td class="label" width="20%"><font face="Arial"><strong>Null</strong></font></td>
    <td class="label" width="40%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fJSID</font></td>
    <td width="20%"><font face="Arial">int</font></td>
    <td width="20%"><font face="Arial">identity</font></td>
    <td width="40%"><font face="Arial">идентификатор задания</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fPRIORITY</font></td>
    <td width="20%"><font face="Arial">smallint</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">приоритет элемента задания</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fJOBNAME</font></td>
    <td width="20%"><font face="Arial">char(8)</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">имя элемента задания</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fBEGINDATE</font></td>
    <td width="20%"><font face="Arial">smalldatetime</font></td>
    <td width="20%"><font face="Arial">NULL</font></td>
    <td width="40%"><font face="Arial">время начала выполнения 
	элемента задания</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fENDDATE</font></td>
    <td width="20%"><font face="Arial">smalldatetime</font></td>
    <td width="20%"><font face="Arial">NULL</font></td>
    <td width="40%"><font face="Arial">время конца выполнения элемента 
	задания</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fSTATE</font></td>
    <td width="20%"><font face="Arial">smallint</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">состояние элемента задания</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fPARAMS</font></td>
    <td width="20%"><font face="Arial">varchar(1000)</font></td>
    <td width="20%"><font face="Arial">NULL</font></td>
    <td width="40%"><font face="Arial">параметры элемента задания</font></td>
  </tr>
</TBODY>
</table>

<p class="label"><font face="Arial"><b><br>
Индексы</b></font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
  <tr vAlign="top">
    <td class="label" width="33%"><font face="Arial"><b>Имя индекса</b></font></td>
    <td class="label" width="33%"><font face="Arial"><strong>Тип </strong></font></td>
    <td class="label" width="33%"><font face="Arial"><strong>Имя 
	столбцов</strong></font></td>
  </tr>
  <tr>
    <td width="33%"><font face="Arial">iJOBSETELEM1</font></td>
    <td width="33%"><font face="Arial">UNIQUE,&nbsp; CLUSTERED</font></td>
    <td width="33%"><font face="Arial">fJSID, fPRIORITY</font></td>
  </tr>
  </table>

<p class="label"><font face="Arial"><b><br>
Примечание</b></font></p>

<p class="label"><a href="database_scheme.html"><font face="Arial">См. 
также</font></a></p>
</body>
</html>