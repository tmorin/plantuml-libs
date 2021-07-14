# Nba


```text
simpleicons-5/N/Nba
```

```text
include('simpleicons-5/N/Nba')
```



| Illustration | Nba |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Nba.png) | ![illustration for Nba](../../simpleicons-5/N/Nba.Local.png) |




## Nba

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Nba
include('simpleicons-5/N/Nba')

' renders the element
Nba('Nba', 'Nba', 'an optional tech label')
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

' loads the Item which embeds the element Nba
include('simpleicons-5/N/Nba')

' renders the element
Nba('Nba', 'Nba', 'an optional tech label')
@enduml
```

