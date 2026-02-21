# Douban


```text
simpleicons/D/Douban
```

```text
include('simpleicons/D/Douban')
```



| Illustration | Douban |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Douban.png) | ![illustration for Douban](../../simpleicons/D/Douban.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DoubanXs>`
- `<$DoubanSm>`
- `<$DoubanMd>`
- `<$DoubanLg>`





## Douban

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Douban
include('simpleicons/D/Douban')

' renders the element
Douban('Douban', 'Douban', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Douban
include('simpleicons/D/Douban')

' renders the element
Douban('Douban', 'Douban', 'an optional tech label', 'an optional description')
@enduml
```

