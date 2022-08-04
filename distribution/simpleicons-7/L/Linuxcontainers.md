# Linuxcontainers


```text
simpleicons-7/L/Linuxcontainers
```

```text
include('simpleicons-7/L/Linuxcontainers')
```



| Illustration | Linuxcontainers |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/L/Linuxcontainers.png) | ![illustration for Linuxcontainers](../../simpleicons-7/L/Linuxcontainers.Local.png) |




## Linuxcontainers

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Linuxcontainers
include('simpleicons-7/L/Linuxcontainers')

' renders the element
Linuxcontainers('Linuxcontainers', 'Linuxcontainers', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Linuxcontainers
include('simpleicons-7/L/Linuxcontainers')

' renders the element
Linuxcontainers('Linuxcontainers', 'Linuxcontainers', 'an optional tech label', 'an optional description')
@enduml
```

