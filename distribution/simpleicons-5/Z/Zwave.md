# Zwave


```text
simpleicons-5/Z/Zwave
```

```text
include('simpleicons-5/Z/Zwave')
```



| Illustration | Zwave |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/Z/Zwave.png) | ![illustration for Zwave](../../simpleicons-5/Z/Zwave.Local.png) |




## Zwave

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Zwave
include('simpleicons-5/Z/Zwave')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Zwave
include('simpleicons-5/Z/Zwave')

' renders the element
Zwave('Zwave', 'Zwave', 'an optional tech label')
@enduml
```

