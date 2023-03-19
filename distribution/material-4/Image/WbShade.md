# WbShade


```text
material-4/Image/WbShade
```

```text
include('material-4/Image/WbShade')
```



| Illustration | WbShade |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/WbShade.png) | ![illustration for WbShade](../../material-4/Image/WbShade.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WbShadeXs>`
- `<$WbShadeSm>`
- `<$WbShadeMd>`
- `<$WbShadeLg>`





## WbShade

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element WbShade
include('material-4/Image/WbShade')

' renders the element
WbShade('WbShade', 'Wb Shade', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WbShade
include('material-4/Image/WbShade')

' renders the element
WbShade('WbShade', 'Wb Shade', 'an optional tech label', 'an optional description')
@enduml
```

