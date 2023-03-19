# Playcanvas


```text
simpleicons-8/P/Playcanvas
```

```text
include('simpleicons-8/P/Playcanvas')
```



| Illustration | Playcanvas |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Playcanvas.png) | ![illustration for Playcanvas](../../simpleicons-8/P/Playcanvas.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlaycanvasXs>`
- `<$PlaycanvasSm>`
- `<$PlaycanvasMd>`
- `<$PlaycanvasLg>`





## Playcanvas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Playcanvas
include('simpleicons-8/P/Playcanvas')

' renders the element
Playcanvas('Playcanvas', 'Playcanvas', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Playcanvas
include('simpleicons-8/P/Playcanvas')

' renders the element
Playcanvas('Playcanvas', 'Playcanvas', 'an optional tech label', 'an optional description')
@enduml
```

