# Podman


```text
simpleicons-5/P/Podman
```

```text
include('simpleicons-5/P/Podman')
```



| Illustration | Podman |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Podman.png) | ![illustration for Podman](../../simpleicons-5/P/Podman.Local.png) |




## Podman

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Podman
include('simpleicons-5/P/Podman')

' renders the element
Podman('Podman', 'Podman', 'an optional tech label')
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

' loads the Item which embeds the element Podman
include('simpleicons-5/P/Podman')

' renders the element
Podman('Podman', 'Podman', 'an optional tech label')
@enduml
```

