# Hyprland


```text
simpleicons-14/H/Hyprland
```

```text
include('simpleicons-14/H/Hyprland')
```



| Illustration | Hyprland |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Hyprland.png) | ![illustration for Hyprland](../../simpleicons-14/H/Hyprland.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Hyprland
include('simpleicons-14/H/Hyprland')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Hyprland
include('simpleicons-14/H/Hyprland')

' renders the element
Hyprland('Hyprland', 'Hyprland', 'an optional tech label', 'an optional description')
@enduml
```

