# Docker


```text
fontawesome-6/Brands/Docker
```

```text
include('fontawesome-6/Brands/Docker')
```



| Illustration | Docker |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Docker.png) | ![illustration for Docker](../../fontawesome-6/Brands/Docker.Local.png) |




## Docker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Docker
include('fontawesome-6/Brands/Docker')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Docker
include('fontawesome-6/Brands/Docker')

' renders the element
Docker('Docker', 'Docker', 'an optional tech label')
@enduml
```

