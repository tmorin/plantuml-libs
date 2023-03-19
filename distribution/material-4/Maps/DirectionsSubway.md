# DirectionsSubway


```text
material-4/Maps/DirectionsSubway
```

```text
include('material-4/Maps/DirectionsSubway')
```



| Illustration | DirectionsSubway |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/DirectionsSubway.png) | ![illustration for DirectionsSubway](../../material-4/Maps/DirectionsSubway.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DirectionsSubwayXs>`
- `<$DirectionsSubwaySm>`
- `<$DirectionsSubwayMd>`
- `<$DirectionsSubwayLg>`





## DirectionsSubway

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DirectionsSubway
include('material-4/Maps/DirectionsSubway')

' renders the element
DirectionsSubway('DirectionsSubway', 'Directions Subway', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DirectionsSubway
include('material-4/Maps/DirectionsSubway')

' renders the element
DirectionsSubway('DirectionsSubway', 'Directions Subway', 'an optional tech label', 'an optional description')
@enduml
```

