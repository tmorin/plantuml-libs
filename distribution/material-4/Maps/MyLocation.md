# MyLocation


```text
material-4/Maps/MyLocation
```

```text
include('material-4/Maps/MyLocation')
```



| Illustration | MyLocation |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/MyLocation.png) | ![illustration for MyLocation](../../material-4/Maps/MyLocation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MyLocationXs>`
- `<$MyLocationSm>`
- `<$MyLocationMd>`
- `<$MyLocationLg>`





## MyLocation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MyLocation
include('material-4/Maps/MyLocation')

' renders the element
MyLocation('MyLocation', 'My Location', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MyLocation
include('material-4/Maps/MyLocation')

' renders the element
MyLocation('MyLocation', 'My Location', 'an optional tech label', 'an optional description')
@enduml
```

