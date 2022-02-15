# MarsAndVenus


```text
fontawesome-6/Solid/MarsAndVenus
```

```text
include('fontawesome-6/Solid/MarsAndVenus')
```



| Illustration | MarsAndVenus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MarsAndVenus.png) | ![illustration for MarsAndVenus](../../fontawesome-6/Solid/MarsAndVenus.Local.png) |




## MarsAndVenus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MarsAndVenus
include('fontawesome-6/Solid/MarsAndVenus')

' renders the element
MarsAndVenus('MarsAndVenus', 'Mars And Venus', 'an optional tech label')
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

' loads the Item which embeds the element MarsAndVenus
include('fontawesome-6/Solid/MarsAndVenus')

' renders the element
MarsAndVenus('MarsAndVenus', 'Mars And Venus', 'an optional tech label')
@enduml
```

