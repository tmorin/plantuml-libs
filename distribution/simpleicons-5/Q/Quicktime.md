# Quicktime


```text
simpleicons-5/Q/Quicktime
```

```text
include('simpleicons-5/Q/Quicktime')
```



| Illustration | Quicktime |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/Q/Quicktime.png) | ![illustration for Quicktime](../../simpleicons-5/Q/Quicktime.Local.png) |




## Quicktime

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Quicktime
include('simpleicons-5/Q/Quicktime')

' renders the element
Quicktime('Quicktime', 'Quicktime', 'an optional tech label')
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

' loads the Item which embeds the element Quicktime
include('simpleicons-5/Q/Quicktime')

' renders the element
Quicktime('Quicktime', 'Quicktime', 'an optional tech label')
@enduml
```

