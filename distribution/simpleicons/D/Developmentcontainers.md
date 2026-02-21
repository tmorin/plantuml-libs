# Developmentcontainers


```text
simpleicons/D/Developmentcontainers
```

```text
include('simpleicons/D/Developmentcontainers')
```



| Illustration | Developmentcontainers |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Developmentcontainers.png) | ![illustration for Developmentcontainers](../../simpleicons/D/Developmentcontainers.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DevelopmentcontainersXs>`
- `<$DevelopmentcontainersSm>`
- `<$DevelopmentcontainersMd>`
- `<$DevelopmentcontainersLg>`





## Developmentcontainers

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Developmentcontainers
include('simpleicons/D/Developmentcontainers')

' renders the element
Developmentcontainers('Developmentcontainers', 'Developmentcontainers', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Developmentcontainers
include('simpleicons/D/Developmentcontainers')

' renders the element
Developmentcontainers('Developmentcontainers', 'Developmentcontainers', 'an optional tech label', 'an optional description')
@enduml
```

