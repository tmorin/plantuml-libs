# Wallabag


```text
simpleicons-14/W/Wallabag
```

```text
include('simpleicons-14/W/Wallabag')
```



| Illustration | Wallabag |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Wallabag.png) | ![illustration for Wallabag](../../simpleicons-14/W/Wallabag.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Wallabag
include('simpleicons-14/W/Wallabag')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Wallabag
include('simpleicons-14/W/Wallabag')

' renders the element
Wallabag('Wallabag', 'Wallabag', 'an optional tech label', 'an optional description')
@enduml
```

