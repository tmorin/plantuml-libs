# Docker


```text
simpleicons-5/D/Docker
```

```text
include('simpleicons-5/D/Docker')
```



| Illustration | Docker |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Docker.png) | ![illustration for Docker](../../simpleicons-5/D/Docker.Local.png) |




## Docker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Docker
include('simpleicons-5/D/Docker')

' renders the element
Docker('Docker', 'Docker', 'an optional tech label')
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

' loads the Item which embeds the element Docker
include('simpleicons-5/D/Docker')

' renders the element
Docker('Docker', 'Docker', 'an optional tech label')
@enduml
```

