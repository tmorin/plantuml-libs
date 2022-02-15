# DrawPolygon


```text
fontawesome-6/Solid/DrawPolygon
```

```text
include('fontawesome-6/Solid/DrawPolygon')
```



| Illustration | DrawPolygon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/DrawPolygon.png) | ![illustration for DrawPolygon](../../fontawesome-6/Solid/DrawPolygon.Local.png) |




## DrawPolygon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element DrawPolygon
include('fontawesome-6/Solid/DrawPolygon')

' renders the element
DrawPolygon('DrawPolygon', 'Draw Polygon', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element DrawPolygon
include('fontawesome-6/Solid/DrawPolygon')

' renders the element
DrawPolygon('DrawPolygon', 'Draw Polygon', 'an optional tech label')
@enduml
```

