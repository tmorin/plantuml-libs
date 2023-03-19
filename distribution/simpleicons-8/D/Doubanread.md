# Doubanread


```text
simpleicons-8/D/Doubanread
```

```text
include('simpleicons-8/D/Doubanread')
```



| Illustration | Doubanread |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/D/Doubanread.png) | ![illustration for Doubanread](../../simpleicons-8/D/Doubanread.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DoubanreadXs>`
- `<$DoubanreadSm>`
- `<$DoubanreadMd>`
- `<$DoubanreadLg>`





## Doubanread

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Doubanread
include('simpleicons-8/D/Doubanread')

' renders the element
Doubanread('Doubanread', 'Doubanread', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Doubanread
include('simpleicons-8/D/Doubanread')

' renders the element
Doubanread('Doubanread', 'Doubanread', 'an optional tech label', 'an optional description')
@enduml
```

