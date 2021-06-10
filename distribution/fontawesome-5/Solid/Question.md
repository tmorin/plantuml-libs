# Question


```text
fontawesome-5/Solid/Question
```

```text
include('fontawesome-5/Solid/Question')
```



| Illustration | Question |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Question.png) | ![illustration for Question](../../fontawesome-5/Solid/Question.Local.png) |




## Question

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Question
include('fontawesome-5/Solid/Question')

' renders the element
Question('Question', 'Question', 'an optional tech label')
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

' loads the Item which embeds the element Question
include('fontawesome-5/Solid/Question')

' renders the element
Question('Question', 'Question', 'an optional tech label')
@enduml
```

