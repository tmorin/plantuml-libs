# Riotgames


```text
simpleicons-5/R/Riotgames
```

```text
include('simpleicons-5/R/Riotgames')
```



| Illustration | Riotgames |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Riotgames.png) | ![illustration for Riotgames](../../simpleicons-5/R/Riotgames.Local.png) |




## Riotgames

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Riotgames
include('simpleicons-5/R/Riotgames')

' renders the element
Riotgames('Riotgames', 'Riotgames', 'an optional tech label')
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

' loads the Item which embeds the element Riotgames
include('simpleicons-5/R/Riotgames')

' renders the element
Riotgames('Riotgames', 'Riotgames', 'an optional tech label')
@enduml
```

