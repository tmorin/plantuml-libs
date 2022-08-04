# PersonCircleQuestion


```text
fontawesome-6/Solid/PersonCircleQuestion
```

```text
include('fontawesome-6/Solid/PersonCircleQuestion')
```



| Illustration | PersonCircleQuestion |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PersonCircleQuestion.png) | ![illustration for PersonCircleQuestion](../../fontawesome-6/Solid/PersonCircleQuestion.Local.png) |




## PersonCircleQuestion

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PersonCircleQuestion
include('fontawesome-6/Solid/PersonCircleQuestion')

' renders the element
PersonCircleQuestion('PersonCircleQuestion', 'Person Circle Question', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PersonCircleQuestion
include('fontawesome-6/Solid/PersonCircleQuestion')

' renders the element
PersonCircleQuestion('PersonCircleQuestion', 'Person Circle Question', 'an optional tech label', 'an optional description')
@enduml
```

