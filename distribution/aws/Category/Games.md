# Games


```text
aws/Category/Games
```

```text
include('aws/Category/Games')
```



| Illustration | Games | GamesCard | GamesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws/Category/Games.png) | ![illustration for Games](../../aws/Category/Games.Local.png) | ![illustration for GamesCard](../../aws/Category/GamesCard.Local.png) | ![illustration for GamesGroup](../../aws/Category/GamesGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GamesXs>`
- `<$GamesSm>`
- `<$GamesMd>`
- `<$GamesLg>`





## Games

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element Games
include('aws/Category/Games')

' renders the element
Games('Games', 'Games', 'an optional tech label', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element Games
include('aws/Category/Games')

' renders the element
Games('Games', 'Games', 'an optional tech label', 'an optional description')
@enduml
```

## GamesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element GamesCard
include('aws/Category/Games')

' renders the element
GamesCard('GamesCard', 'Games Card', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element GamesCard
include('aws/Category/Games')

' renders the element
GamesCard('GamesCard', 'Games Card', 'an optional description')
@enduml
```

## GamesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element GamesGroup
include('aws/Category/Games')

' renders the element
GamesGroup('GamesGroup', 'Games Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
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
include('aws/bootstrap')

' loads the Item which embeds the element GamesGroup
include('aws/Category/Games')

' renders the element
GamesGroup('GamesGroup', 'Games Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

