# Plane


```text
simpleicons/P/Plane
```

```text
include('simpleicons/P/Plane')
```



| Illustration | Plane |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Plane.png) | ![illustration for Plane](../../simpleicons/P/Plane.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlaneXs>`
- `<$PlaneSm>`
- `<$PlaneMd>`
- `<$PlaneLg>`





## Plane

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Plane
include('simpleicons/P/Plane')

' renders the element
Plane('Plane', 'Plane', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Plane
include('simpleicons/P/Plane')

' renders the element
Plane('Plane', 'Plane', 'an optional tech label', 'an optional description')
@enduml
```

