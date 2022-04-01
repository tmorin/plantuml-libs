# PersonChalkboard


```text
fontawesome-6/Solid/PersonChalkboard
```

```text
include('fontawesome-6/Solid/PersonChalkboard')
```



| Illustration | PersonChalkboard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PersonChalkboard.png) | ![illustration for PersonChalkboard](../../fontawesome-6/Solid/PersonChalkboard.Local.png) |




## PersonChalkboard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PersonChalkboard
include('fontawesome-6/Solid/PersonChalkboard')

' renders the element
PersonChalkboard('PersonChalkboard', 'Person Chalkboard', 'an optional tech label')
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

' loads the Item which embeds the element PersonChalkboard
include('fontawesome-6/Solid/PersonChalkboard')

' renders the element
PersonChalkboard('PersonChalkboard', 'Person Chalkboard', 'an optional tech label')
@enduml
```

