# OutdoorGrill


```text
material/Social/OutdoorGrill
```

```text
include('material/Social/OutdoorGrill')
```



| Illustration | OutdoorGrill |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/OutdoorGrill.png) | ![illustration for OutdoorGrill](../../material/Social/OutdoorGrill.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OutdoorGrillXs>`
- `<$OutdoorGrillSm>`
- `<$OutdoorGrillMd>`
- `<$OutdoorGrillLg>`





## OutdoorGrill

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element OutdoorGrill
include('material/Social/OutdoorGrill')

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
include('material/bootstrap')

' loads the Item which embeds the element OutdoorGrill
include('material/Social/OutdoorGrill')

' renders the element
OutdoorGrill('OutdoorGrill', 'Outdoor Grill', 'an optional tech label', 'an optional description')
@enduml
```

