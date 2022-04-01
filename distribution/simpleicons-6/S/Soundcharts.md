# Soundcharts


```text
simpleicons-6/S/Soundcharts
```

```text
include('simpleicons-6/S/Soundcharts')
```



| Illustration | Soundcharts |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Soundcharts.png) | ![illustration for Soundcharts](../../simpleicons-6/S/Soundcharts.Local.png) |




## Soundcharts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Soundcharts
include('simpleicons-6/S/Soundcharts')

' renders the element
Soundcharts('Soundcharts', 'Soundcharts', 'an optional tech label')
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

' loads the Item which embeds the element Soundcharts
include('simpleicons-6/S/Soundcharts')

' renders the element
Soundcharts('Soundcharts', 'Soundcharts', 'an optional tech label')
@enduml
```

