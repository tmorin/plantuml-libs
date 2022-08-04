# CastConnected


```text
material-4/Hardware/CastConnected
```

```text
include('material-4/Hardware/CastConnected')
```



| Illustration | CastConnected |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/CastConnected.png) | ![illustration for CastConnected](../../material-4/Hardware/CastConnected.Local.png) |




## CastConnected

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CastConnected
include('material-4/Hardware/CastConnected')

' renders the element
CastConnected('CastConnected', 'Cast Connected', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element CastConnected
include('material-4/Hardware/CastConnected')

' renders the element
CastConnected('CastConnected', 'Cast Connected', 'an optional tech label', 'an optional description')
@enduml
```

