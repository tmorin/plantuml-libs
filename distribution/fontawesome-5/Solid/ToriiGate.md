# ToriiGate


```text
fontawesome-5/Solid/ToriiGate
```

```text
include('fontawesome-5/Solid/ToriiGate')
```



| Illustration | ToriiGate |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ToriiGate.png) | ![illustration for ToriiGate](../../fontawesome-5/Solid/ToriiGate.Local.png) |




## ToriiGate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ToriiGate
include('fontawesome-5/Solid/ToriiGate')

' renders the element
ToriiGate('ToriiGate', 'Torii Gate', 'an optional tech label')
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

' loads the Item which embeds the element ToriiGate
include('fontawesome-5/Solid/ToriiGate')

' renders the element
ToriiGate('ToriiGate', 'Torii Gate', 'an optional tech label')
@enduml
```

