# Loopback


```text
simpleicons-7/L/Loopback
```

```text
include('simpleicons-7/L/Loopback')
```



| Illustration | Loopback |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/L/Loopback.png) | ![illustration for Loopback](../../simpleicons-7/L/Loopback.Local.png) |




## Loopback

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Loopback
include('simpleicons-7/L/Loopback')

' renders the element
Loopback('Loopback', 'Loopback', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Loopback
include('simpleicons-7/L/Loopback')

' renders the element
Loopback('Loopback', 'Loopback', 'an optional tech label')
@enduml
```

