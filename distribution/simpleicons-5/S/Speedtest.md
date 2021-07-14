# Speedtest


```text
simpleicons-5/S/Speedtest
```

```text
include('simpleicons-5/S/Speedtest')
```



| Illustration | Speedtest |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Speedtest.png) | ![illustration for Speedtest](../../simpleicons-5/S/Speedtest.Local.png) |




## Speedtest

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Speedtest
include('simpleicons-5/S/Speedtest')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Speedtest
include('simpleicons-5/S/Speedtest')

' renders the element
Speedtest('Speedtest', 'Speedtest', 'an optional tech label')
@enduml
```

