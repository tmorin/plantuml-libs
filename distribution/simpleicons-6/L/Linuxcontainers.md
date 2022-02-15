# Linuxcontainers


```text
simpleicons-6/L/Linuxcontainers
```

```text
include('simpleicons-6/L/Linuxcontainers')
```



| Illustration | Linuxcontainers |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/L/Linuxcontainers.png) | ![illustration for Linuxcontainers](../../simpleicons-6/L/Linuxcontainers.Local.png) |




## Linuxcontainers

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Linuxcontainers
include('simpleicons-6/L/Linuxcontainers')

' renders the element
Linuxcontainers('Linuxcontainers', 'Linuxcontainers', 'an optional tech label')
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

' loads the Item which embeds the element Linuxcontainers
include('simpleicons-6/L/Linuxcontainers')

' renders the element
Linuxcontainers('Linuxcontainers', 'Linuxcontainers', 'an optional tech label')
@enduml
```

