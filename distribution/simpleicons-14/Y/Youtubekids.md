# Youtubekids


```text
simpleicons-14/Y/Youtubekids
```

```text
include('simpleicons-14/Y/Youtubekids')
```



| Illustration | Youtubekids |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Y/Youtubekids.png) | ![illustration for Youtubekids](../../simpleicons-14/Y/Youtubekids.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$YoutubekidsXs>`
- `<$YoutubekidsSm>`
- `<$YoutubekidsMd>`
- `<$YoutubekidsLg>`





## Youtubekids

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Youtubekids
include('simpleicons-14/Y/Youtubekids')

' renders the element
Youtubekids('Youtubekids', 'Youtubekids', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Youtubekids
include('simpleicons-14/Y/Youtubekids')

' renders the element
Youtubekids('Youtubekids', 'Youtubekids', 'an optional tech label', 'an optional description')
@enduml
```

