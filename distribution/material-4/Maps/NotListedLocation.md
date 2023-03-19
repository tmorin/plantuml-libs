# NotListedLocation


```text
material-4/Maps/NotListedLocation
```

```text
include('material-4/Maps/NotListedLocation')
```



| Illustration | NotListedLocation |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/NotListedLocation.png) | ![illustration for NotListedLocation](../../material-4/Maps/NotListedLocation.Local.png) |



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
include('material-4/bootstrap')

' loads the Item which embeds the element NotListedLocation
include('material-4/Maps/NotListedLocation')

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
include('material-4/bootstrap')

' loads the Item which embeds the element NotListedLocation
include('material-4/Maps/NotListedLocation')

' renders the element
NotListedLocation('NotListedLocation', 'Not Listed Location', 'an optional tech label', 'an optional description')
@enduml
```

