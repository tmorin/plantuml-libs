# Hyprland


```text
simpleicons/H/Hyprland
```

```text
include('simpleicons/H/Hyprland')
```



| Illustration | Hyprland |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Hyprland.png) | ![illustration for Hyprland](../../simpleicons/H/Hyprland.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HyprlandXs>`
- `<$HyprlandSm>`
- `<$HyprlandMd>`
- `<$HyprlandLg>`





## Hyprland

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Hyprland
include('simpleicons/H/Hyprland')

' renders the element
Hyprland('Hyprland', 'Hyprland', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hyprland
include('simpleicons/H/Hyprland')

' renders the element
Hyprland('Hyprland', 'Hyprland', 'an optional tech label', 'an optional description')
@enduml
```

