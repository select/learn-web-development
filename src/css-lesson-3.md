title: CSS Lesson 3 - Cascading Style Sheets basics
author:
  name: Falko Krause
  github: select
  url: https://github.com/select/learn-web-development
output: dist/css-lesson-3.html
<!-- theme: ./revealjs-theme -->
theme: ./cleaver-select-theme
controls: true

--
# CSS Lesson 3
## Cascade and the battle for specificity

--
browser's default styles

&lt;

user styles

docuent author styles:

external stylesheet `.css`
internal `<style>` in the document

--
### The cascade
```css
p {
  background: orange;
  font-size: 24px;
}
p {
  background: green;
}
```


```css
p {
  background: orange;
  background: green;
}
```
