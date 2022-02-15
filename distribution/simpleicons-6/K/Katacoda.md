# Katacoda


```text
simpleicons-6/K/Katacoda
```

```text
include('simpleicons-6/K/Katacoda')
```



| Illustration | Katacoda |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/K/Katacoda.png) | ![illustration for Katacoda](../../simpleicons-6/K/Katacoda.Local.png) |




## Katacoda

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Katacoda
include('simpleicons-6/K/Katacoda')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Katacoda
include('simpleicons-6/K/Katacoda')

' renders the element
Katacoda('Katacoda', 'Katacoda', 'an optional tech label')
@enduml
```

