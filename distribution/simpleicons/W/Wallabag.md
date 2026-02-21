# Wallabag


```text
simpleicons/W/Wallabag
```

```text
include('simpleicons/W/Wallabag')
```



| Illustration | Wallabag |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Wallabag.png) | ![illustration for Wallabag](../../simpleicons/W/Wallabag.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WallabagXs>`
- `<$WallabagSm>`
- `<$WallabagMd>`
- `<$WallabagLg>`





## Wallabag

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Wallabag
include('simpleicons/W/Wallabag')

' renders the element
Wallabag('Wallabag', 'Wallabag', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wallabag
include('simpleicons/W/Wallabag')

' renders the element
Wallabag('Wallabag', 'Wallabag', 'an optional tech label', 'an optional description')
@enduml
```

