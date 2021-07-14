# Quasar


```text
simpleicons-5/Q/Quasar
```

```text
include('simpleicons-5/Q/Quasar')
```



| Illustration | Quasar |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/Q/Quasar.png) | ![illustration for Quasar](../../simpleicons-5/Q/Quasar.Local.png) |




## Quasar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Quasar
include('simpleicons-5/Q/Quasar')

' renders the element
Quasar('Quasar', 'Quasar', 'an optional tech label')
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

' loads the Item which embeds the element Quasar
include('simpleicons-5/Q/Quasar')

' renders the element
Quasar('Quasar', 'Quasar', 'an optional tech label')
@enduml
```

