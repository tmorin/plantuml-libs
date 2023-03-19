# WrongLocation


```text
material-4/Maps/WrongLocation
```

```text
include('material-4/Maps/WrongLocation')
```



| Illustration | WrongLocation |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/WrongLocation.png) | ![illustration for WrongLocation](../../material-4/Maps/WrongLocation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WrongLocationXs>`
- `<$WrongLocationSm>`
- `<$WrongLocationMd>`
- `<$WrongLocationLg>`





## WrongLocation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element WrongLocation
include('material-4/Maps/WrongLocation')

' renders the element
WrongLocation('WrongLocation', 'Wrong Location', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WrongLocation
include('material-4/Maps/WrongLocation')

' renders the element
WrongLocation('WrongLocation', 'Wrong Location', 'an optional tech label', 'an optional description')
@enduml
```

