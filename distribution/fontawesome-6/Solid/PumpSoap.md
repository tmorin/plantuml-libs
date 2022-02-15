# PumpSoap


```text
fontawesome-6/Solid/PumpSoap
```

```text
include('fontawesome-6/Solid/PumpSoap')
```



| Illustration | PumpSoap |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PumpSoap.png) | ![illustration for PumpSoap](../../fontawesome-6/Solid/PumpSoap.Local.png) |




## PumpSoap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PumpSoap
include('fontawesome-6/Solid/PumpSoap')

' renders the element
PumpSoap('PumpSoap', 'Pump Soap', 'an optional tech label')
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

' loads the Item which embeds the element PumpSoap
include('fontawesome-6/Solid/PumpSoap')

' renders the element
PumpSoap('PumpSoap', 'Pump Soap', 'an optional tech label')
@enduml
```

