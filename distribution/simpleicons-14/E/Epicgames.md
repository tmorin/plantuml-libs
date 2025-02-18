# Epicgames


```text
simpleicons-14/E/Epicgames
```

```text
include('simpleicons-14/E/Epicgames')
```



| Illustration | Epicgames |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Epicgames.png) | ![illustration for Epicgames](../../simpleicons-14/E/Epicgames.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EpicgamesXs>`
- `<$EpicgamesSm>`
- `<$EpicgamesMd>`
- `<$EpicgamesLg>`





## Epicgames

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Epicgames
include('simpleicons-14/E/Epicgames')

' renders the element
Epicgames('Epicgames', 'Epicgames', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Epicgames
include('simpleicons-14/E/Epicgames')

' renders the element
Epicgames('Epicgames', 'Epicgames', 'an optional tech label', 'an optional description')
@enduml
```

