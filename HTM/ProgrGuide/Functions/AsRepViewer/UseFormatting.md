﻿<html>
<head>
<title>Отчет\UseFormatting</title>
    <style type="text/css">
        .style1 {
            font-family: Arial;
        }
    </style>
</head>

<body>

<p><strong><font size="4" face="Arial">Свойство UseFormatting<br>
<br>
</font></strong><font face="Arial"><a href="../AsRepViewer.html">См. 
также</a>&nbsp;
<u>Пример</u>&nbsp; <a
href="../AsRepViewer.html">Применяется к</a></font></p>

<p><font face="Arial">Возвращает или устанавливает признак 
использования форматирования текста в отчете. </font></p>

<p><font face="Arial">Свойство для чтения и записи.</font></p>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><em>object</em><strong>.UseFormatting= </strong>
[<em>bValue</em>]</font></p>

<p><font face="Arial">Синтаксис свойства <b>UseFormatting</b>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows" height="115">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%" height="18"><font face="Arial"><b>
	Параметр</b></font></td>
    <td class="label" width="71%" height="18"><font face="Arial"><strong>
	Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%" height="18"><font face="Arial"><em>object</em></font></td>
    <td width="71%" height="18"><font face="Arial">строковое 
	выражение, являющееся ссылкой на экземпляр объекта типа отчет.</font></td>
  </tr>
  <tr>
    <td width="29%" height="37"><em><font face="Arial">bValue</font></em></td>
    <td width="71%" height="37"><font face="Arial">логическое 
	выражение, определяющее признак использования форматирования. При 1 - 
	добавлямые заголовки, строки и итоги могут содержать форматированные теги, 
	интерпретация которых перечислена в установках. При 0 - форматированные теги 
	интерпретируются как обычный текст.</font></td>
  </tr>
</TBODY>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Установки</b></font></p>

<p><font face="Arial">Установки для <em>тегов форматирования</em><i>
</i>следующие:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Значение</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial">&lt;b&gt;<b>text_bold</b>&lt;/b&gt;</font></td>
    <td width="71%"><font face="Arial">полужирный шрифт текста</font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial">&lt;i&gt;<i>text_italic</i>&lt;/i&gt;</font></td>
    <td width="71%"><font face="Arial">текст пишется курсивом</font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial">&lt;f&gt;текст_на_русском&lt;/f&gt;</font></td>
    <td width="71%"><font face="Arial">текст пишется 
	альтернативным(русским) шрифтом</font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial">&lt;s&gt;<strike>text_strikethru</strike>&lt;/s&gt;</font></td>
    <td width="71%"><font face="Arial">зачеркивание текста</font></td>
  </tr>
    <tr>
    <td width="29%"><font face="Arial">&lt;t&gt;Symbols_Font&lt;/t&gt;</font></td>
    <td width="71%" class="style1">форматирование текста в символы</td>
    </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial">&lt;u&gt;<u>text_underline</u>&lt;/u&gt;</font></td>
    <td width="71%"><font face="Arial">подчеркивание текста</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p&nbsp;</p>

<p class="label"><font face="Arial"><strong>Примечание</strong></font></p>
    <p class="style1"> &nbsp;&nbsp;&nbsp; При форматировании текста в символы очень важно, чтобы фонт всех элементов текста был одинаковым, 
        в противном случае символы будут отличаться по размеру.</p>

<p class="label">&nbsp;</p>
</body>
</html>