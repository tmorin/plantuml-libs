# Place


```text
material/Maps/Place
```

```text
include('material/Maps/Place')
```



| Illustration | Place |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/Place.png) | ![illustration for Place](../../material/Maps/Place.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlaceXs>`
- `<$PlaceSm>`
- `<$PlaceMd>`
- `<$PlaceLg>`





## Place

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Place
include('material/Maps/Place')

' renders the element
Place('Place', 'Place', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Place
include('material/Maps/Place')

' renders the element
Place('Place', 'Place', 'an optional tech label', 'an optional description')
@enduml
```

