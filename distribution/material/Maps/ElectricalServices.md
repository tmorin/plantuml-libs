# ElectricalServices


```text
material/Maps/ElectricalServices
```

```text
include('material/Maps/ElectricalServices')
```



| Illustration | ElectricalServices |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/ElectricalServices.png) | ![illustration for ElectricalServices](../../material/Maps/ElectricalServices.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ElectricalServicesXs>`
- `<$ElectricalServicesSm>`
- `<$ElectricalServicesMd>`
- `<$ElectricalServicesLg>`





## ElectricalServices

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ElectricalServices
include('material/Maps/ElectricalServices')

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
include('material/bootstrap')

' loads the Item which embeds the element ElectricalServices
include('material/Maps/ElectricalServices')

' renders the element
ElectricalServices('ElectricalServices', 'Electrical Services', 'an optional tech label', 'an optional description')
@enduml
```

