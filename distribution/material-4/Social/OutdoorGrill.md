# OutdoorGrill


```text
material-4/Social/OutdoorGrill
```

```text
include('material-4/Social/OutdoorGrill')
```



| Illustration | OutdoorGrill |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/OutdoorGrill.png) | ![illustration for OutdoorGrill](../../material-4/Social/OutdoorGrill.Local.png) |




## OutdoorGrill

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element OutdoorGrill
include('material-4/Social/OutdoorGrill')

' renders the element
OutdoorGrill('OutdoorGrill', 'Outdoor Grill', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element OutdoorGrill
include('material-4/Social/OutdoorGrill')

' renders the element
OutdoorGrill('OutdoorGrill', 'Outdoor Grill', 'an optional tech label', 'an optional description')
@enduml
```

