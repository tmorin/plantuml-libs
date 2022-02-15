# Flood


```text
simpleicons-6/F/Flood
```

```text
include('simpleicons-6/F/Flood')
```



| Illustration | Flood |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Flood.png) | ![illustration for Flood](../../simpleicons-6/F/Flood.Local.png) |




## Flood

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Flood
include('simpleicons-6/F/Flood')

' renders the element
Flood('Flood', 'Flood', 'an optional tech label')
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

' loads the Item which embeds the element Flood
include('simpleicons-6/F/Flood')

' renders the element
Flood('Flood', 'Flood', 'an optional tech label')
@enduml
```

