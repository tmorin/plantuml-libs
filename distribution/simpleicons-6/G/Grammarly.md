# Grammarly


```text
simpleicons-6/G/Grammarly
```

```text
include('simpleicons-6/G/Grammarly')
```



| Illustration | Grammarly |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Grammarly.png) | ![illustration for Grammarly](../../simpleicons-6/G/Grammarly.Local.png) |




## Grammarly

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Grammarly
include('simpleicons-6/G/Grammarly')

' renders the element
Grammarly('Grammarly', 'Grammarly', 'an optional tech label')
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

' loads the Item which embeds the element Grammarly
include('simpleicons-6/G/Grammarly')

' renders the element
Grammarly('Grammarly', 'Grammarly', 'an optional tech label')
@enduml
```

