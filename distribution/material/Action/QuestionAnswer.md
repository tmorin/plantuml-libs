# QuestionAnswer


```text
material/Action/QuestionAnswer
```

```text
include('material/Action/QuestionAnswer')
```



| Illustration | QuestionAnswer |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/QuestionAnswer.png) | ![illustration for QuestionAnswer](../../material/Action/QuestionAnswer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QuestionAnswerXs>`
- `<$QuestionAnswerSm>`
- `<$QuestionAnswerMd>`
- `<$QuestionAnswerLg>`





## QuestionAnswer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element QuestionAnswer
include('material/Action/QuestionAnswer')

' renders the element
QuestionAnswer('QuestionAnswer', 'Question Answer', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element QuestionAnswer
include('material/Action/QuestionAnswer')

' renders the element
QuestionAnswer('QuestionAnswer', 'Question Answer', 'an optional tech label', 'an optional description')
@enduml
```

