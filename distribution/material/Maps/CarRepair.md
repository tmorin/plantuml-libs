# CarRepair


```text
material/Maps/CarRepair
```

```text
include('material/Maps/CarRepair')
```



| Illustration | CarRepair |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/CarRepair.png) | ![illustration for CarRepair](../../material/Maps/CarRepair.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CarRepairXs>`
- `<$CarRepairSm>`
- `<$CarRepairMd>`
- `<$CarRepairLg>`





## CarRepair

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element CarRepair
include('material/Maps/CarRepair')

' renders the element
CarRepair('CarRepair', 'Car Repair', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CarRepair
include('material/Maps/CarRepair')

' renders the element
CarRepair('CarRepair', 'Car Repair', 'an optional tech label', 'an optional description')
@enduml
```

