<html>
<head>
<title>Документ\WriteLog</title>
    <style type="text/css">
        .style1
        {
            width: 20%;
        }
    </style>
</head>

<body>

<p><strong><font size="4" face="Arial">Метод WriteLog<br>
<br>
</font></strong><font face="Arial"><a href="../Asdoc.html">См. также</a>&nbsp;
<u>Пример</u>&nbsp; <a href="../Asdoc.html">Применяется к</a></font></p>

<p class="label"><font face="Arial">Добавляет новую запись в журнал 
регистрации операций над документом. Для каждого документа в системе ведется 
журнал регистрации (протоколирования) основных этапов жизненного цикла 
документа. Некоторые события, как создание документа, его редактирование 
записываются в журнал автоматически, но данный метод позволяет скриптографу 
добавить свои записи в данный журнал. После применения данного метода в таблице <a href="../../Database/DocLog.html">
DOCLOG</a>
добавляется запись со значением &#39;M&#39;. Если данный метод вызывается из обработчика 
системного события Action, то записи с помощью данного метода буферизуются и 
только после выхода из Action, добавляются в <a href="../../Database/DocLog.html">
DOCLOG</a>.</font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><em>object</em><strong>.WriteLog (</strong><em> 
sMsg, [nDCRID], [bDCRIDIsISN]</em><strong>
)</strong></font></p>

<p><font face="Arial">Синтаксис метода <strong>WriteLog</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="style1"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td class="style1"><font face="Arial"><em>object</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, являющееся 
	ссылкой на экземпляр документа</font></td>
  </tr>
  <tr>
    <td class="style1"><font face="Arial"><em>sMsg</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее сообщение добавляемое в журнал регистрации операций. Длина 
	сообщения не должна превышать 32 символа.</font></td>
  </tr>
    <tr>
    <td class="style1"><font face="Arial"><em> 
        nDCRID</em></font></td>
    <td width="71%"><font face="Arial">необязательное числовое выражение, 
	определяющее либо номер запроса на изменение документа(DocChangeRequest), либо ISN 
        базового документа.</font></td>
    </tr>
    <tr>
    <td class="style1"><font face="Arial"><em> 
        bDCRIDIsISN</em></font></td>
    <td width="71%"><font face="Arial">необязательное логическое выражение, 
	определяющее значение <em> 
        nDCRID</em>. При значении True <em> 
        nDCRID </em>определяет номер запроса на изменение документа, при значении False 
        определяет ISN базового документа.</font></td>
    </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание<br>
<br>
</b>С добавлением записи в журнал регистрации операций, система автоматически 
запоминает также текущее состояние документа. </font></p>
</body>
</html>