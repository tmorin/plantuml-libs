# S7Airlines


```text
simpleicons-5/S/S7Airlines
```

```text
include('simpleicons-5/S/S7Airlines')
```



| Illustration | S7Airlines |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/S7Airlines.png) | ![illustration for S7Airlines](../../simpleicons-5/S/S7Airlines.Local.png) |




## S7Airlines

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element S7Airlines
include('simpleicons-5/S/S7Airlines')

' renders the element
S7Airlines('S7Airlines', 'S7 Airlines', 'an optional tech label')
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

' loads the Item which embeds the element S7Airlines
include('simpleicons-5/S/S7Airlines')

' renders the element
S7Airlines('S7Airlines', 'S7 Airlines', 'an optional tech label')
@enduml
```

