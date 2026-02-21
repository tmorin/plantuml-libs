# NotListedLocation


```text
material/Maps/NotListedLocation
```

```text
include('material/Maps/NotListedLocation')
```



| Illustration | NotListedLocation |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/NotListedLocation.png) | ![illustration for NotListedLocation](../../material/Maps/NotListedLocation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NotListedLocationXs>`
- `<$NotListedLocationSm>`
- `<$NotListedLocationMd>`
- `<$NotListedLocationLg>`





## NotListedLocation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element NotListedLocation
include('material/Maps/NotListedLocation')

' renders the element
NotListedLocation('NotListedLocation', 'Not Listed Location', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element NotListedLocation
include('material/Maps/NotListedLocation')

' renders the element
NotListedLocation('NotListedLocation', 'Not Listed Location', 'an optional tech label', 'an optional description')
@enduml
```

