# VectorPolygon


```text
fontawesome/Solid/VectorPolygon
```

```text
include('fontawesome/Solid/VectorPolygon')
```



| Illustration | VectorPolygon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/VectorPolygon.png) | ![illustration for VectorPolygon](../../fontawesome/Solid/VectorPolygon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VectorPolygonXs>`
- `<$VectorPolygonSm>`
- `<$VectorPolygonMd>`
- `<$VectorPolygonLg>`





## VectorPolygon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element VectorPolygon
include('fontawesome/Solid/VectorPolygon')

' renders the element
VectorPolygon('VectorPolygon', 'Vector Polygon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VectorPolygon
include('fontawesome/Solid/VectorPolygon')

' renders the element
VectorPolygon('VectorPolygon', 'Vector Polygon', 'an optional tech label', 'an optional description')
@enduml
```

