# Myshows


```text
simpleicons/M/Myshows
```

```text
include('simpleicons/M/Myshows')
```



| Illustration | Myshows |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Myshows.png) | ![illustration for Myshows](../../simpleicons/M/Myshows.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MyshowsXs>`
- `<$MyshowsSm>`
- `<$MyshowsMd>`
- `<$MyshowsLg>`





## Myshows

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Myshows
include('simpleicons/M/Myshows')

' renders the element
Myshows('Myshows', 'Myshows', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Myshows
include('simpleicons/M/Myshows')

' renders the element
Myshows('Myshows', 'Myshows', 'an optional tech label', 'an optional description')
@enduml
```

