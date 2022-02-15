# Speedtest


```text
simpleicons-6/S/Speedtest
```

```text
include('simpleicons-6/S/Speedtest')
```



| Illustration | Speedtest |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Speedtest.png) | ![illustration for Speedtest](../../simpleicons-6/S/Speedtest.Local.png) |




## Speedtest

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Speedtest
include('simpleicons-6/S/Speedtest')

' renders the element
Speedtest('Speedtest', 'Speedtest', 'an optional tech label')
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

' loads the Item which embeds the element Speedtest
include('simpleicons-6/S/Speedtest')

' renders the element
Speedtest('Speedtest', 'Speedtest', 'an optional tech label')
@enduml
```

