# MasksTheater


```text
fontawesome-6/Solid/MasksTheater
```

```text
include('fontawesome-6/Solid/MasksTheater')
```



| Illustration | MasksTheater |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MasksTheater.png) | ![illustration for MasksTheater](../../fontawesome-6/Solid/MasksTheater.Local.png) |




## MasksTheater

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MasksTheater
include('fontawesome-6/Solid/MasksTheater')

' renders the element
MasksTheater('MasksTheater', 'Masks Theater', 'an optional tech label')
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

' loads the Item which embeds the element MasksTheater
include('fontawesome-6/Solid/MasksTheater')

' renders the element
MasksTheater('MasksTheater', 'Masks Theater', 'an optional tech label')
@enduml
```

