# PumpSoap


```text
fontawesome/Solid/PumpSoap
```

```text
include('fontawesome/Solid/PumpSoap')
```



| Illustration | PumpSoap |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PumpSoap.png) | ![illustration for PumpSoap](../../fontawesome/Solid/PumpSoap.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PumpSoapXs>`
- `<$PumpSoapSm>`
- `<$PumpSoapMd>`
- `<$PumpSoapLg>`





## PumpSoap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PumpSoap
include('fontawesome/Solid/PumpSoap')

' renders the element
PumpSoap('PumpSoap', 'Pump Soap', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PumpSoap
include('fontawesome/Solid/PumpSoap')

' renders the element
PumpSoap('PumpSoap', 'Pump Soap', 'an optional tech label', 'an optional description')
@enduml
```

