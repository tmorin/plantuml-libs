# ElectricalServices


```text
material-4/Maps/ElectricalServices
```

```text
include('material-4/Maps/ElectricalServices')
```



| Illustration | ElectricalServices |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/ElectricalServices.png) | ![illustration for ElectricalServices](../../material-4/Maps/ElectricalServices.Local.png) |




## ElectricalServices

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ElectricalServices
include('material-4/Maps/ElectricalServices')

' renders the element
ElectricalServices('ElectricalServices', 'Electrical Services', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ElectricalServices
include('material-4/Maps/ElectricalServices')

' renders the element
ElectricalServices('ElectricalServices', 'Electrical Services', 'an optional tech label', 'an optional description')
@enduml
```

