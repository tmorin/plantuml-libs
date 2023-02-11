# Katacoda


```text
simpleicons-8/K/Katacoda
```

```text
include('simpleicons-8/K/Katacoda')
```



| Illustration | Katacoda |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/K/Katacoda.png) | ![illustration for Katacoda](../../simpleicons-8/K/Katacoda.Local.png) |




## Katacoda

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Katacoda
include('simpleicons-8/K/Katacoda')

' renders the element
Katacoda('Katacoda', 'Katacoda', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Katacoda
include('simpleicons-8/K/Katacoda')

' renders the element
Katacoda('Katacoda', 'Katacoda', 'an optional tech label', 'an optional description')
@enduml
```

