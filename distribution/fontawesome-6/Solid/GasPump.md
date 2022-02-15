# GasPump


```text
fontawesome-6/Solid/GasPump
```

```text
include('fontawesome-6/Solid/GasPump')
```



| Illustration | GasPump |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/GasPump.png) | ![illustration for GasPump](../../fontawesome-6/Solid/GasPump.Local.png) |




## GasPump

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element GasPump
include('fontawesome-6/Solid/GasPump')

' renders the element
GasPump('GasPump', 'Gas Pump', 'an optional tech label')
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

' loads the Item which embeds the element GasPump
include('fontawesome-6/Solid/GasPump')

' renders the element
GasPump('GasPump', 'Gas Pump', 'an optional tech label')
@enduml
```

