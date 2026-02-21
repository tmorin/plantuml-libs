# AddLocation


```text
material/Maps/AddLocation
```

```text
include('material/Maps/AddLocation')
```



| Illustration | AddLocation |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/AddLocation.png) | ![illustration for AddLocation](../../material/Maps/AddLocation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AddLocationXs>`
- `<$AddLocationSm>`
- `<$AddLocationMd>`
- `<$AddLocationLg>`





## AddLocation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AddLocation
include('material/Maps/AddLocation')

' renders the element
AddLocation('AddLocation', 'Add Location', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AddLocation
include('material/Maps/AddLocation')

' renders the element
AddLocation('AddLocation', 'Add Location', 'an optional tech label', 'an optional description')
@enduml
```

