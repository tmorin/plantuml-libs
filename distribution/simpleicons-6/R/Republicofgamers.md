# Republicofgamers


```text
simpleicons-6/R/Republicofgamers
```

```text
include('simpleicons-6/R/Republicofgamers')
```



| Illustration | Republicofgamers |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Republicofgamers.png) | ![illustration for Republicofgamers](../../simpleicons-6/R/Republicofgamers.Local.png) |




## Republicofgamers

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Republicofgamers
include('simpleicons-6/R/Republicofgamers')

' renders the element
Republicofgamers('Republicofgamers', 'Republicofgamers', 'an optional tech label')
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

' loads the Item which embeds the element Republicofgamers
include('simpleicons-6/R/Republicofgamers')

' renders the element
Republicofgamers('Republicofgamers', 'Republicofgamers', 'an optional tech label')
@enduml
```

