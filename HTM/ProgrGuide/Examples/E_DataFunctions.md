﻿<html>
<head>
<title>Пример события Functions для ист</title>
<style type="text/css">
.style1 {
	font-family: Arial;
}
</style>
</head>

<body>

<font size="3" face="Arial"><strong>Пример события Functions</strong></font><font face="Arial"> 
<strong>для источника данных<br />
<br />
</strong>Sub Functions() <br>
&nbsp;&nbsp;&nbsp; If 
<a href="../Functions/Functions/InterfaceManagment/CurrentView.html">CurrentView</a>.<span lang="ru">S</span>elected<span lang="ru">C</span>ount &gt; 0 Then<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CurrentView.<a href="../Functions/AsRepViewer/RegistrFunction.html">RegistrFunction</a>(&quot;<span lang="ru">GroupEditing</span>&quot;,&quot;groupedit&quot;)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CurrentView.RegistrFunction(&quot;<span lang="ru">GroupSelling</span>&quot;,&quot;group<span lang="ru">sell</span>&quot;)</font><span class="style1"><br />
&nbsp;&nbsp;&nbsp; End If</span><font face="Arial"><br>
End Sub</font><p>&nbsp;</p>

</body>

</html>