# Zwave


```text
simpleicons-7/Z/Zwave
```

```text
include('simpleicons-7/Z/Zwave')
```



| Illustration | Zwave |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/Z/Zwave.png) | ![illustration for Zwave](../../simpleicons-7/Z/Zwave.Local.png) |




## Zwave

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Zwave
include('simpleicons-7/Z/Zwave')

' renders the element
Zwave('Zwave', 'Zwave', 'an optional tech label')
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

' loads the Item which embeds the element Zwave
include('simpleicons-7/Z/Zwave')

' renders the element
Zwave('Zwave', 'Zwave', 'an optional tech label')
@enduml
```

