# BedPulse


```text
fontawesome/Solid/BedPulse
```

```text
include('fontawesome/Solid/BedPulse')
```



| Illustration | BedPulse |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BedPulse.png) | ![illustration for BedPulse](../../fontawesome/Solid/BedPulse.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BedPulseXs>`
- `<$BedPulseSm>`
- `<$BedPulseMd>`
- `<$BedPulseLg>`





## BedPulse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BedPulse
include('fontawesome/Solid/BedPulse')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element BedPulse
include('fontawesome/Solid/BedPulse')

' renders the element
BedPulse('BedPulse', 'Bed Pulse', 'an optional tech label', 'an optional description')
@enduml
```

