# Raspberrypi


```text
simpleicons-5/R/Raspberrypi
```

```text
include('simpleicons-5/R/Raspberrypi')
```



| Illustration | Raspberrypi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Raspberrypi.png) | ![illustration for Raspberrypi](../../simpleicons-5/R/Raspberrypi.Local.png) |




## Raspberrypi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Raspberrypi
include('simpleicons-5/R/Raspberrypi')

' renders the element
Raspberrypi('Raspberrypi', 'Raspberrypi', 'an optional tech label')
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

' loads the Item which embeds the element Raspberrypi
include('simpleicons-5/R/Raspberrypi')

' renders the element
Raspberrypi('Raspberrypi', 'Raspberrypi', 'an optional tech label')
@enduml
```

