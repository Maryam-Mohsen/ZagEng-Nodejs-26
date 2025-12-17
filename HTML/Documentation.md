### Document Structure

* ```<!DOCTYPE html>```: declares document type.

* ```<html></html>```: root element.

* ```<head></head>```: metadata, title, links.

* ```<body></body>```: visible page content.

### Head Section

* ```<meta charset="UTF-8">```: sets character encoding.

* ```<title>```: page title in browser tab.

* ```<link>```: links external CSS file.

* ```<style></style>```: internal CSS code.

### Text Elements

* ```<h1> <h2> <h3> <h4> <h5> <h6>```: headings.

* ```<p></p>```: paragraph.

* ```<br>```: line break.

* ```<b></b>```: bold.

* ```<i></i>```: italic.

* ```<u></u>```: underline.

* ```<s></s>```: strikethrough.

* ```<mark></mark>```: highlight.

* ```<sup></sup>```: superscript.

* ```<sub></sub>```: subscript.

### Lists

* ```<ol></ol>```: ordered list.

* ```<ul></ul>```: unordered list.

* ```<li></li>```: list item.

### Links & Media

* ```<a href="...">```: hyperlink.

* ```<img src="...">```: image.

* ```<video src="..." controls>```: video.

* ```<audio src="..." controls>```: audio.

* ```<iframe src="...">```: embedded content.

### Tables

* ```<table></table>```: creates table.

* ```<tr></tr>```: row.

* ```<th></th>```: header cell.

* ```<td></td>```: data cell.

* rowspan: merge rows.

* colspan: merge columns.

### Forms

* ```<form></form>```: form container.

* ```<input type="text">```: text field.

* ```<input type="password">```: password field.

* ```<input type="email">```: email field.

* ```<select>```: dropdown.

* ```<textarea>```: multi-line input.

* ```<input type="radio">```: single choice.

* ```<input type="checkbox">```: multiple choice.

* ```<input type="submit">```: submit button.

### Extra Elements

* ```<label>```: label for form inputs.

* ```<option>```: item inside ```<select>``` dropdown.

* ```<thead>```: table header section.

* ```<tbody>```: main table body.

* ```<tfoot>```: table footer section.

* ```<font>```: old tag for font styling (color, size, face).

* ```align="..."```: aligns text inside elements.

* ```dir="rtl"```: sets text direction Right-to-Left.

* ```poster="..."```: preview image for video.

* ```loop```: repeats audio/video.

* ```preload```: controls preloading of media.

* ```controls```: adds audio/video controls.

* ```border="1"```: sets table border.
___
### Example Code
```html
<!DOCTYPE html>
<html dir="rtl">
<head>
    <meta charset="utf-8"> <!-- encoding -->
    <meta name="description" content="Website description."> <!-- description -->
    <title>HTML</title> <!-- title -->
    <link rel="stylesheet" href="style.css"> <!-- stylesheet -->
    <style>
        /* styles */
    </style> <!-- style -->
</head>
<body>
    <h1>Main Title (H1)</h1> <!-- heading -->

    <p align="right"> <!-- paragraph -->
        This is Maryam.
    </p>

    <p> <!-- text -->
        This is <b>Bold</b> text, and this is <i>Italic</i>.
        <br> <!-- break -->
        This word is <u>Underlined</u>, and this one is <s>Strikethrough</s>.
        <br>
        Here is a <mark>Highlighted</mark> word.
        <br>
        <sup>Sup</sup> and <sub>Sub</sub>.
        <br>
        <font color="Green" size="6" face="Times new roman">Font example</font> <!-- font -->
    </p>

    <ol type="A"> <!-- ordered -->
        <li>First</li>
        <li>Second</li>
    </ol>

    <ul> <!-- unordered -->
        <li>First</li>
        <li>Second</li>
    </ul>

    <a href="https://www.google.com">Google</a> <!-- link -->

    <img src="images/logo.png" alt="Google Logo" width="400"> <!-- image -->

    <video src="videos/sample.mp4" controls poster="images/poster.jpg" width="500"></video> <!-- video -->

    <audio src="audio/sample.mp3" controls loop preload="auto"></audio> <!-- audio -->

    <iframe src="external_file.pdf" width="600" height="400"></iframe> <!-- iframe -->

    <table border="1"> <!-- table -->
        <thead> <!-- thead -->
            <tr> <!-- row -->
                <th>Student Name</th> <!-- th -->
                <th>Score</th>
                <th>Notes</th>
            </tr>
        </thead>
        <tbody> <!-- tbody -->
            <tr>
                <td>Maryam</td> <!-- td -->
                <td>90</td>
                <td rowspan="2">Merged Rows</td> <!-- rowspan -->
            </tr>
            <tr>
                <td>Mayar</td>
                <td>95</td>
            </tr>
            <tr>
                <td colspan="3">Merged Columns</td> <!-- colspan -->
            </tr>
        </tbody>
        <tfoot> <!-- tfoot -->
            <tr>
                <td>Total</td>
                <td colspan="2">185</td>
            </tr>
        </tfoot>
    </table>

    <form> <!-- form -->
        <input type="text" name="Name" value="Name"> <!-- text -->
        <br>
        <label for="pass">Password:</label>
        <input type="password" id="pass" name="password" > <!-- password -->
        <br>
        <input type="email" name="email" value="email"> <!-- email -->
        <br>
        <select name="country" > <!-- select -->
            <option value="egypt">Egypt</option>
            <option value="saudi">Saudi Arabia</option>
        </select>
        <br>
        <textarea name="large_text" rows="4" cols="50"></textarea> <!-- textarea -->
        <br>
        <input type="radio" name="gender" value="male" checked> Male <!-- radio -->
        <input type="radio" name="gender" value="female"> Female
        <br>
        <input type="checkbox" name="agree" value="yes"> I Agree <!-- checkbox -->
        <br>
        <input type="submit" value="Submit"> <!-- submit -->
    </form>
</body>
</html>

```