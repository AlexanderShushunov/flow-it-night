# Репозиторий с материалами доклада ["Типзируй этo"](https://events.epam.com/events/nightit/talks/4493)
## Анонс
Часто видите ошибку “itShouldBeAnArray.map is not a function”? 
Автодополнение IDE дает список всех идентификаторов проекта?
С трудом понимаете, что конкретно надо этому API?
Коллеги с бека смеются и советуют перейти на “настоящий” язык?
Нет! **JavaScript** мы не бросим! Потому что он хороший :).
Мы его протипизируем! И поможет нам в этом **Flow**!

## Запись доклада

https://www.youtube.com/watch?v=-DhimKUoXPA

Большое спасибо Арине Николаевой за съемку и Андрею Иванову за монтаж!

## Что в репозитории
В докладе я разбираю два примера:
- "Простой". На нем я в двух словах объяснил, как работает **Flow**.
 Начало примера - ветка *simple-example-start*.
 Конец - *simple-example-end*.
- "Крестики нолики на **React**". В приложении есть несколько ошибок. 
 Добавляя типы, я нахожу и исправляю эти ошибки. 
 Начало примера - ветка *react-example-start*.
 Конец - *raect-example-end*.

## Полезные ссылки
- [Документация](https://flow.org/en/docs/) 
- [Попробовать Flow online](https://flow.org/try/)
- [Цикл](https://habrahabr.ru/post/326304/) [статей](https://habrahabr.ru/post/326394/) на Хабре
- [Послушав этот доклад, Вы точно начнете захотите Flow](https://www.youtube.com/watch?v=V1po0BT7kac)
- Хорошее обзорное [видео](https://www.youtube.com/watch?v=IwVyroc__bM) о Flow. Затрагивает все темы. От "зачем все это нужно" до "как работает сервер Flow".
- Для тех, кто хочет глубже понять Flow, стоит посмотреть [вот это видео](https://www.youtube.com/watch?v=VEaDsKyDxkY)
- Отличный доклад от Ильи Климова [«Строгий» JavaScript: типы против реальности](https://www.youtube.com/watch?time_continue=1&v=etKOc80-cw0)
- [Исследование о том, что статическая типизация снижает количество ошибок](https://blog.acolyer.org/2017/09/19/to-type-or-not-to-type-quantifying-detectable-bugs-in-javascript) 


### Проверки в runtime
- [flow-runtime](https://codemix.github.io/flow-runtime)
- [flow-io](https://github.com/gcanti/flow-io)
- [tcomb](https://github.com/gcanti/babel-plugin-tcomb)
- [babel-plugin-react-flow-props-to-prop-types ](https://github.com/thejameskyle/babel-plugin-react-flow-props-to-prop-types)


## Ковариантность и контрвариантность 
В [системе типов Flow](https://flow.org/en/docs/lang/variance/) выход контравариантный, а вход ковариантный.

Массивы [инвариантны](https://flow.org/try/#0PQKgBAAgZgNg9gdzCYAoAxjAhgZx2AQTAG8BfAbg2zzACEwBTADwBcGA7AE3yLMs1z4Awo1YdudEhVQY47HCzBYATsqwBPAPJQCALkKqNAHgIA+MAF4wAbQC6-OQqWGtUIfoIujQ81bsP5RSE4ADcVAEssdnQGDy9aX2c1VyEAp2D2FjUw5Ujo2INkowTLJI1tAnIgA). 

Поля объектов [инвариантны](https://flow.org/try/#0MYGwhgzhAEAKCmAnCB7AdtA3tNYC28AXNBAC6ICWaA5tAL4BQokMAongA4goCe880eAA9S8NABMYCZOizRx8DmESkCaUsTKUa9BgwBuywZ258icgO4ALFMXZde-etAC8lm8TTwL0e6ad0ANwGRhxIqGjE2Na2cOGydK7GDmbBQA).
Но можно вариантность [задавать руками](https://flow.org/en/docs/types/interfaces/#toc-interface-property-variance-read-only-and-write-only). 
[Пример](https://flow.org/try/#0PQKgBAAgZgNg9gdzCYAoAxjAhgZx2AIQFMBLAOwHMwBvAXw2zzAAUiAnHOMsIgDwBciZACb5i5KtTBksAWyIAuMDn5sJYeplz4AorIAO8AJ5EiPAUNEt2nblOFF9WNv3ll+SlWsobUqAG7OPAbGpkpSCAAWcEp6hnAmZrRgALw0YFEx0kRIcaFJANwBQQBGpJThGdFK4j7JaRHV2Ui1VLRFgWxg6HCdJFjulQDUmUqsHFwaqcHxiR1BPe5sWH0DHukAtKPWE9z1YGUSBUA).
