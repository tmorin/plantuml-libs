# Wayland


```text
simpleicons/W/Wayland
```

```text
include('simpleicons/W/Wayland')
```



| Illustration | Wayland |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Wayland.png) | ![illustration for Wayland](../../simpleicons/W/Wayland.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WaylandXs>`
- `<$WaylandSm>`
- `<$WaylandMd>`
- `<$WaylandLg>`





## Wayland

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Wayland
include('simpleicons/W/Wayland')

' renders the element
Wayland('Wayland', 'Wayland', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wayland
include('simpleicons/W/Wayland')

' renders the element
Wayland('Wayland', 'Wayland', 'an optional tech label', 'an optional description')
@enduml
```

