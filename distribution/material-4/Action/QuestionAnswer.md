# QuestionAnswer


```text
material-4/Action/QuestionAnswer
```

```text
include('material-4/Action/QuestionAnswer')
```



| Illustration | QuestionAnswer |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/QuestionAnswer.png) | ![illustration for QuestionAnswer](../../material-4/Action/QuestionAnswer.Local.png) |




## QuestionAnswer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element QuestionAnswer
include('material-4/Action/QuestionAnswer')

' renders the element
QuestionAnswer('QuestionAnswer', 'Question Answer', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element QuestionAnswer
include('material-4/Action/QuestionAnswer')

' renders the element
QuestionAnswer('QuestionAnswer', 'Question Answer', 'an optional tech label')
@enduml
```

