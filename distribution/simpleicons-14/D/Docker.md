# Docker


```text
simpleicons-14/D/Docker
```

```text
include('simpleicons-14/D/Docker')
```



| Illustration | Docker |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Docker.png) | ![illustration for Docker](../../simpleicons-14/D/Docker.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DockerXs>`
- `<$DockerSm>`
- `<$DockerMd>`
- `<$DockerLg>`





## Docker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Docker
include('simpleicons-14/D/Docker')

' renders the element
Docker('Docker', 'Docker', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Docker
include('simpleicons-14/D/Docker')

' renders the element
Docker('Docker', 'Docker', 'an optional tech label', 'an optional description')
@enduml
```

