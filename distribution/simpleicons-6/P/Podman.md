# Podman


```text
simpleicons-6/P/Podman
```

```text
include('simpleicons-6/P/Podman')
```



| Illustration | Podman |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Podman.png) | ![illustration for Podman](../../simpleicons-6/P/Podman.Local.png) |




## Podman

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Podman
include('simpleicons-6/P/Podman')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Podman
include('simpleicons-6/P/Podman')

' renders the element
Podman('Podman', 'Podman', 'an optional tech label')
@enduml
```

