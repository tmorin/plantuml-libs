# Premierleague


```text
simpleicons-7/P/Premierleague
```

```text
include('simpleicons-7/P/Premierleague')
```



| Illustration | Premierleague |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Premierleague.png) | ![illustration for Premierleague](../../simpleicons-7/P/Premierleague.Local.png) |




## Premierleague

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Premierleague
include('simpleicons-7/P/Premierleague')

' renders the element
Premierleague('Premierleague', 'Premierleague', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Premierleague
include('simpleicons-7/P/Premierleague')

' renders the element
Premierleague('Premierleague', 'Premierleague', 'an optional tech label', 'an optional description')
@enduml
```

