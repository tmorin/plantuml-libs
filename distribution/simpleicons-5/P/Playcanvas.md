# Playcanvas


```text
simpleicons-5/P/Playcanvas
```

```text
include('simpleicons-5/P/Playcanvas')
```



| Illustration | Playcanvas |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Playcanvas.png) | ![illustration for Playcanvas](../../simpleicons-5/P/Playcanvas.Local.png) |




## Playcanvas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Playcanvas
include('simpleicons-5/P/Playcanvas')

' renders the element
Playcanvas('Playcanvas', 'Playcanvas', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Playcanvas
include('simpleicons-5/P/Playcanvas')

' renders the element
Playcanvas('Playcanvas', 'Playcanvas', 'an optional tech label')
@enduml
```

