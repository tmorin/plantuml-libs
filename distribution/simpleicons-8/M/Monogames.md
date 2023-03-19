# Monogames


```text
simpleicons-8/M/Monogames
```

```text
include('simpleicons-8/M/Monogames')
```



| Illustration | Monogames |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/M/Monogames.png) | ![illustration for Monogames](../../simpleicons-8/M/Monogames.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MonogamesXs>`
- `<$MonogamesSm>`
- `<$MonogamesMd>`
- `<$MonogamesLg>`





## Monogames

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Monogames
include('simpleicons-8/M/Monogames')

' renders the element
Monogames('Monogames', 'Monogames', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Monogames
include('simpleicons-8/M/Monogames')

' renders the element
Monogames('Monogames', 'Monogames', 'an optional tech label', 'an optional description')
@enduml
```

