# Premierleague


```text
simpleicons-5/P/Premierleague
```

```text
include('simpleicons-5/P/Premierleague')
```



| Illustration | Premierleague |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Premierleague.png) | ![illustration for Premierleague](../../simpleicons-5/P/Premierleague.Local.png) |




## Premierleague

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Premierleague
include('simpleicons-5/P/Premierleague')

' renders the element
Premierleague('Premierleague', 'Premierleague', 'an optional tech label')
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

' loads the Item which embeds the element Premierleague
include('simpleicons-5/P/Premierleague')

' renders the element
Premierleague('Premierleague', 'Premierleague', 'an optional tech label')
@enduml
```

