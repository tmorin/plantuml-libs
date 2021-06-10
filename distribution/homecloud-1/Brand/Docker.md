# Docker


```text
homecloud-1/Brand/Docker
```

```text
include('homecloud-1/Brand/Docker')
```



| Illustration | Docker | DockerCard | DockerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../homecloud-1/Brand/Docker.png) | ![illustration for Docker](../../homecloud-1/Brand/Docker.Local.png) | ![illustration for DockerCard](../../homecloud-1/Brand/DockerCard.Local.png) | ![illustration for DockerGroup](../../homecloud-1/Brand/DockerGroup.Local.png) |




## Docker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-1/bootstrap')

' loads the Item which embeds the element Docker
include('homecloud-1/Brand/Docker')

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
include('homecloud-1/bootstrap')

' loads the Item which embeds the element Docker
include('homecloud-1/Brand/Docker')

' renders the element
Docker('Docker', 'Docker', 'an optional tech label')
@enduml
```

## DockerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-1/bootstrap')

' loads the Item which embeds the element DockerCard
include('homecloud-1/Brand/Docker')

' renders the element
DockerCard('DockerCard', 'Docker Card', 'an optional description')
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
include('homecloud-1/bootstrap')

' loads the Item which embeds the element DockerCard
include('homecloud-1/Brand/Docker')

' renders the element
DockerCard('DockerCard', 'Docker Card', 'an optional description')
@enduml
```

## DockerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('homecloud-1/bootstrap')

' loads the Item which embeds the element DockerGroup
include('homecloud-1/Brand/Docker')

' renders the element
DockerGroup('DockerGroup', 'Docker Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
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
include('homecloud-1/bootstrap')

' loads the Item which embeds the element DockerGroup
include('homecloud-1/Brand/Docker')

' renders the element
DockerGroup('DockerGroup', 'Docker Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

