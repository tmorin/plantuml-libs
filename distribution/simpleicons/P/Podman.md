# Podman


```text
simpleicons/P/Podman
```

```text
include('simpleicons/P/Podman')
```



| Illustration | Podman |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Podman.png) | ![illustration for Podman](../../simpleicons/P/Podman.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PodmanXs>`
- `<$PodmanSm>`
- `<$PodmanMd>`
- `<$PodmanLg>`





## Podman

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Podman
include('simpleicons/P/Podman')

' renders the element
Podman('Podman', 'Podman', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Podman
include('simpleicons/P/Podman')

' renders the element
Podman('Podman', 'Podman', 'an optional tech label', 'an optional description')
@enduml
```

