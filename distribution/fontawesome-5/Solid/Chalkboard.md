# Chalkboard


```text
fontawesome-5/Solid/Chalkboard
```

```text
include('fontawesome-5/Solid/Chalkboard')
```



| Illustration | Chalkboard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Chalkboard.png) | ![illustration for Chalkboard](../../fontawesome-5/Solid/Chalkboard.Local.png) |




## Chalkboard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Chalkboard
include('fontawesome-5/Solid/Chalkboard')

' renders the element
Chalkboard('Chalkboard', 'Chalkboard', 'an optional tech label')
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

' loads the Item which embeds the element Chalkboard
include('fontawesome-5/Solid/Chalkboard')

' renders the element
Chalkboard('Chalkboard', 'Chalkboard', 'an optional tech label')
@enduml
```

