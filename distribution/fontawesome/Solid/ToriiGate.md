# ToriiGate


```text
fontawesome/Solid/ToriiGate
```

```text
include('fontawesome/Solid/ToriiGate')
```



| Illustration | ToriiGate |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ToriiGate.png) | ![illustration for ToriiGate](../../fontawesome/Solid/ToriiGate.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ToriiGateXs>`
- `<$ToriiGateSm>`
- `<$ToriiGateMd>`
- `<$ToriiGateLg>`





## ToriiGate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ToriiGate
include('fontawesome/Solid/ToriiGate')

' renders the element
ToriiGate('ToriiGate', 'Torii Gate', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ToriiGate
include('fontawesome/Solid/ToriiGate')

' renders the element
ToriiGate('ToriiGate', 'Torii Gate', 'an optional tech label', 'an optional description')
@enduml
```

