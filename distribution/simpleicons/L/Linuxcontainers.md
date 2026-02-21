# Linuxcontainers


```text
simpleicons/L/Linuxcontainers
```

```text
include('simpleicons/L/Linuxcontainers')
```



| Illustration | Linuxcontainers |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Linuxcontainers.png) | ![illustration for Linuxcontainers](../../simpleicons/L/Linuxcontainers.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LinuxcontainersXs>`
- `<$LinuxcontainersSm>`
- `<$LinuxcontainersMd>`
- `<$LinuxcontainersLg>`





## Linuxcontainers

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Linuxcontainers
include('simpleicons/L/Linuxcontainers')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Linuxcontainers
include('simpleicons/L/Linuxcontainers')

' renders the element
Linuxcontainers('Linuxcontainers', 'Linuxcontainers', 'an optional tech label', 'an optional description')
@enduml
```

