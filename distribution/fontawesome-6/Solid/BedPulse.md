# BedPulse


```text
fontawesome-6/Solid/BedPulse
```

```text
include('fontawesome-6/Solid/BedPulse')
```



| Illustration | BedPulse |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BedPulse.png) | ![illustration for BedPulse](../../fontawesome-6/Solid/BedPulse.Local.png) |




## BedPulse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BedPulse
include('fontawesome-6/Solid/BedPulse')

' renders the element
BedPulse('BedPulse', 'Bed Pulse', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BedPulse
include('fontawesome-6/Solid/BedPulse')

' renders the element
BedPulse('BedPulse', 'Bed Pulse', 'an optional tech label', 'an optional description')
@enduml
```

