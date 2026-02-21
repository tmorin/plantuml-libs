# Youhodler


```text
simpleicons-14/Y/Youhodler
```

```text
include('simpleicons-14/Y/Youhodler')
```



| Illustration | Youhodler |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Y/Youhodler.png) | ![illustration for Youhodler](../../simpleicons-14/Y/Youhodler.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$YouhodlerXs>`
- `<$YouhodlerSm>`
- `<$YouhodlerMd>`
- `<$YouhodlerLg>`





## Youhodler

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Youhodler
include('simpleicons-14/Y/Youhodler')

' renders the element
Youhodler('Youhodler', 'Youhodler', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Youhodler
include('simpleicons-14/Y/Youhodler')

' renders the element
Youhodler('Youhodler', 'Youhodler', 'an optional tech label', 'an optional description')
@enduml
```

