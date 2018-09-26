﻿<html>
<head>
<title>Таблица DOCSATTACH</title>
</head>

<body>

<h1><font size="4" face="Arial">Таблица DOCSATTACH</font></h1>

<p><font face="Arial">Таблицa хранения файловых дополнений.<br>
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
    <td width="20%"><font face="Arial">fISN</font></td>
    <td width="20%"><font face="Arial">int </font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">идентификатор документа, к 
	которому прикреплен данный файл</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fFILE</font></td>
    <td width="20%"><font face="Arial">varchar (50)</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">наименование файла</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fVERSION</font></td>
    <td width="20%"><font face="Arial">smallint</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">номер очередной версии файла</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fCOMMENT</font></td>
    <td width="20%"><font face="Arial">varchar (50)</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">комментарий к действию над 
	файлом</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fSUID</font></td>
    <td width="20%"><font face="Arial">smallint</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">идентификатор пользователя, 
	совершивший&nbsp; последнее действие над файлом</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fDATE</font></td>
    <td width="20%"><font face="Arial">smalldatetime</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">дата последней модификации 
	файла</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fCOMPNAME</font></td>
    <td width="20%"><font face="Arial">varchar (32)</font></td>
    <td width="20%"><font face="Arial">NOT NULL</font></td>
    <td width="40%"><font face="Arial">имя компьютера, с которого 
	производилось действие</font></td>
  </tr>
  <tr>
    <td width="20%"><font face="Arial">fVALUE</font></td>
    <td width="20%"><font face="Arial">image</font></td>
    <td width="20%"><font face="Arial">NULL</font></td>
    <td width="40%"><font face="Arial">образ файла</font></td>
  </tr>
</TBODY>
</table>

<p class="label"><font face="Arial"><b><br>
Индекс</b></font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
  <tr vAlign="top">
    <td class="label" width="33%"><font face="Arial"><b>Имя индекса</b></font></td>
    <td class="label" width="33%"><font face="Arial"><strong>Тип </strong></font></td>
    <td class="label" width="33%"><font face="Arial"><strong>Имя 
	столбцов</strong></font></td>
  </tr>
  <tr>
    <td width="33%"><font face="Arial">iDOCSATTACH1</font></td>
    <td width="33%"><font face="Arial">UNIQUE,&nbsp; CLUSTERED</font></td>
    <td width="33%"><font face="Arial">fISN, fFILE</font></td>
  </tr>
</table>

<p class="label"><font face="Arial"><b><br>
<br>
Примечание</b></font></p>

<p class="label"><font face="Arial"><a href="database_scheme.html">См. 
также</a></font></p>
</body>
</html>