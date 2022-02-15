# Raspberrypi


```text
simpleicons-6/R/Raspberrypi
```

```text
include('simpleicons-6/R/Raspberrypi')
```



| Illustration | Raspberrypi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Raspberrypi.png) | ![illustration for Raspberrypi](../../simpleicons-6/R/Raspberrypi.Local.png) |




## Raspberrypi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Raspberrypi
include('simpleicons-6/R/Raspberrypi')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Raspberrypi
include('simpleicons-6/R/Raspberrypi')

' renders the element
Raspberrypi('Raspberrypi', 'Raspberrypi', 'an optional tech label')
@enduml
```

