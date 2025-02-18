# Nba


```text
simpleicons-14/N/Nba
```

```text
include('simpleicons-14/N/Nba')
```



| Illustration | Nba |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Nba.png) | ![illustration for Nba](../../simpleicons-14/N/Nba.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NbaXs>`
- `<$NbaSm>`
- `<$NbaMd>`
- `<$NbaLg>`





## Nba

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nba
include('simpleicons-14/N/Nba')

' renders the element
Nba('Nba', 'Nba', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nba
include('simpleicons-14/N/Nba')

' renders the element
Nba('Nba', 'Nba', 'an optional tech label', 'an optional description')
@enduml
```

