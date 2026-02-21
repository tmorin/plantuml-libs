# Polygon


```text
simpleicons/P/Polygon
```

```text
include('simpleicons/P/Polygon')
```



| Illustration | Polygon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Polygon.png) | ![illustration for Polygon](../../simpleicons/P/Polygon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PolygonXs>`
- `<$PolygonSm>`
- `<$PolygonMd>`
- `<$PolygonLg>`





## Polygon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Polygon
include('simpleicons/P/Polygon')

' renders the element
Polygon('Polygon', 'Polygon', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Polygon
include('simpleicons/P/Polygon')

' renders the element
Polygon('Polygon', 'Polygon', 'an optional tech label', 'an optional description')
@enduml
```

