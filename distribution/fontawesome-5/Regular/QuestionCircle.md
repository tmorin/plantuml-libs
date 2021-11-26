# QuestionCircle


```text
fontawesome-5/Regular/QuestionCircle
```

```text
include('fontawesome-5/Regular/QuestionCircle')
```



| Illustration | QuestionCircle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/QuestionCircle.png) | ![illustration for QuestionCircle](../../fontawesome-5/Regular/QuestionCircle.Local.png) |




## QuestionCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element QuestionCircle
include('fontawesome-5/Regular/QuestionCircle')

' renders the element
QuestionCircle('QuestionCircle', 'Question Circle', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element QuestionCircle
include('fontawesome-5/Regular/QuestionCircle')

' renders the element
QuestionCircle('QuestionCircle', 'Question Circle', 'an optional tech label')
@enduml
```

