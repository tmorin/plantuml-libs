# DrawPolygon


```text
fontawesome/Solid/DrawPolygon
```

```text
include('fontawesome/Solid/DrawPolygon')
```



| Illustration | DrawPolygon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/DrawPolygon.png) | ![illustration for DrawPolygon](../../fontawesome/Solid/DrawPolygon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DrawPolygonXs>`
- `<$DrawPolygonSm>`
- `<$DrawPolygonMd>`
- `<$DrawPolygonLg>`





## DrawPolygon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element DrawPolygon
include('fontawesome/Solid/DrawPolygon')

' renders the element
DrawPolygon('DrawPolygon', 'Draw Polygon', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element DrawPolygon
include('fontawesome/Solid/DrawPolygon')

' renders the element
DrawPolygon('DrawPolygon', 'Draw Polygon', 'an optional tech label', 'an optional description')
@enduml
```

