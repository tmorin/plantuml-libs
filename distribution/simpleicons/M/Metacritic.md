# Metacritic


```text
simpleicons/M/Metacritic
```

```text
include('simpleicons/M/Metacritic')
```



| Illustration | Metacritic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Metacritic.png) | ![illustration for Metacritic](../../simpleicons/M/Metacritic.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MetacriticXs>`
- `<$MetacriticSm>`
- `<$MetacriticMd>`
- `<$MetacriticLg>`





## Metacritic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Metacritic
include('simpleicons/M/Metacritic')

' renders the element
Metacritic('Metacritic', 'Metacritic', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Metacritic
include('simpleicons/M/Metacritic')

' renders the element
Metacritic('Metacritic', 'Metacritic', 'an optional tech label', 'an optional description')
@enduml
```

