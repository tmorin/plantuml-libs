# HardHat


```text
fontawesome-5/Solid/HardHat
```

```text
include('fontawesome-5/Solid/HardHat')
```



| Illustration | HardHat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/HardHat.png) | ![illustration for HardHat](../../fontawesome-5/Solid/HardHat.Local.png) |




## HardHat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HardHat
include('fontawesome-5/Solid/HardHat')

' renders the element
HardHat('HardHat', 'Hard Hat', 'an optional tech label')
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

' loads the Item which embeds the element HardHat
include('fontawesome-5/Solid/HardHat')

' renders the element
HardHat('HardHat', 'Hard Hat', 'an optional tech label')
@enduml
```

