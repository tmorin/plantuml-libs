# Loom


```text
simpleicons-5/L/Loom
```

```text
include('simpleicons-5/L/Loom')
```



| Illustration | Loom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/L/Loom.png) | ![illustration for Loom](../../simpleicons-5/L/Loom.Local.png) |




## Loom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Loom
include('simpleicons-5/L/Loom')

' renders the element
Loom('Loom', 'Loom', 'an optional tech label')
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

' loads the Item which embeds the element Loom
include('simpleicons-5/L/Loom')

' renders the element
Loom('Loom', 'Loom', 'an optional tech label')
@enduml
```

