# Roadmapdotsh


```text
simpleicons/R/Roadmapdotsh
```

```text
include('simpleicons/R/Roadmapdotsh')
```



| Illustration | Roadmapdotsh |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Roadmapdotsh.png) | ![illustration for Roadmapdotsh](../../simpleicons/R/Roadmapdotsh.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RoadmapdotshXs>`
- `<$RoadmapdotshSm>`
- `<$RoadmapdotshMd>`
- `<$RoadmapdotshLg>`





## Roadmapdotsh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Roadmapdotsh
include('simpleicons/R/Roadmapdotsh')

' renders the element
Roadmapdotsh('Roadmapdotsh', 'Roadmapdotsh', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Roadmapdotsh
include('simpleicons/R/Roadmapdotsh')

' renders the element
Roadmapdotsh('Roadmapdotsh', 'Roadmapdotsh', 'an optional tech label', 'an optional description')
@enduml
```

