# Clapperboard


```text
fontawesome-6/Solid/Clapperboard
```

```text
include('fontawesome-6/Solid/Clapperboard')
```



| Illustration | Clapperboard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Clapperboard.png) | ![illustration for Clapperboard](../../fontawesome-6/Solid/Clapperboard.Local.png) |




## Clapperboard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Clapperboard
include('fontawesome-6/Solid/Clapperboard')

' renders the element
Clapperboard('Clapperboard', 'Clapperboard', 'an optional tech label')
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

' loads the Item which embeds the element Clapperboard
include('fontawesome-6/Solid/Clapperboard')

' renders the element
Clapperboard('Clapperboard', 'Clapperboard', 'an optional tech label')
@enduml
```

