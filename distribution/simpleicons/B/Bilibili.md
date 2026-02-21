# Bilibili


```text
simpleicons/B/Bilibili
```

```text
include('simpleicons/B/Bilibili')
```



| Illustration | Bilibili |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Bilibili.png) | ![illustration for Bilibili](../../simpleicons/B/Bilibili.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BilibiliXs>`
- `<$BilibiliSm>`
- `<$BilibiliMd>`
- `<$BilibiliLg>`





## Bilibili

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Bilibili
include('simpleicons/B/Bilibili')

' renders the element
Bilibili('Bilibili', 'Bilibili', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bilibili
include('simpleicons/B/Bilibili')

' renders the element
Bilibili('Bilibili', 'Bilibili', 'an optional tech label', 'an optional description')
@enduml
```

