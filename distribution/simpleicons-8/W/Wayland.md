# Wayland


```text
simpleicons-8/W/Wayland
```

```text
include('simpleicons-8/W/Wayland')
```



| Illustration | Wayland |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/W/Wayland.png) | ![illustration for Wayland](../../simpleicons-8/W/Wayland.Local.png) |




## Wayland

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Wayland
include('simpleicons-8/W/Wayland')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Wayland
include('simpleicons-8/W/Wayland')

' renders the element
Wayland('Wayland', 'Wayland', 'an optional tech label', 'an optional description')
@enduml
```

