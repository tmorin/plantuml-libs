# Pubg


```text
simpleicons-8/P/Pubg
```

```text
include('simpleicons-8/P/Pubg')
```



| Illustration | Pubg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Pubg.png) | ![illustration for Pubg](../../simpleicons-8/P/Pubg.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PubgXs>`
- `<$PubgSm>`
- `<$PubgMd>`
- `<$PubgLg>`





## Pubg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Pubg
include('simpleicons-8/P/Pubg')

' renders the element
Pubg('Pubg', 'Pubg', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Pubg
include('simpleicons-8/P/Pubg')

' renders the element
Pubg('Pubg', 'Pubg', 'an optional tech label', 'an optional description')
@enduml
```

