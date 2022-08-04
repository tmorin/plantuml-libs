# SchoolCircleExclamation


```text
fontawesome-6/Solid/SchoolCircleExclamation
```

```text
include('fontawesome-6/Solid/SchoolCircleExclamation')
```



| Illustration | SchoolCircleExclamation |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SchoolCircleExclamation.png) | ![illustration for SchoolCircleExclamation](../../fontawesome-6/Solid/SchoolCircleExclamation.Local.png) |




## SchoolCircleExclamation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SchoolCircleExclamation
include('fontawesome-6/Solid/SchoolCircleExclamation')

' renders the element
SchoolCircleExclamation('SchoolCircleExclamation', 'School Circle Exclamation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SchoolCircleExclamation
include('fontawesome-6/Solid/SchoolCircleExclamation')

' renders the element
SchoolCircleExclamation('SchoolCircleExclamation', 'School Circle Exclamation', 'an optional tech label', 'an optional description')
@enduml
```

