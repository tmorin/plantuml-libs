# Katacoda


```text
simpleicons-5/K/Katacoda
```

```text
include('simpleicons-5/K/Katacoda')
```



| Illustration | Katacoda |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Katacoda.png) | ![illustration for Katacoda](../../simpleicons-5/K/Katacoda.Local.png) |




## Katacoda

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Katacoda
include('simpleicons-5/K/Katacoda')

' renders the element
Katacoda('Katacoda', 'Katacoda', 'an optional tech label')
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

' loads the Item which embeds the element Katacoda
include('simpleicons-5/K/Katacoda')

' renders the element
Katacoda('Katacoda', 'Katacoda', 'an optional tech label')
@enduml
```

