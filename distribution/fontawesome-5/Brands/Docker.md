# Docker


```text
fontawesome-5/Brands/Docker
```

```text
include('fontawesome-5/Brands/Docker')
```



| Illustration | Docker |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Docker.png) | ![illustration for Docker](../../fontawesome-5/Brands/Docker.Local.png) |




## Docker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Docker
include('fontawesome-5/Brands/Docker')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Docker
include('fontawesome-5/Brands/Docker')

' renders the element
Docker('Docker', 'Docker', 'an optional tech label')
@enduml
```

