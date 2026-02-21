# Audiobookshelf


```text
simpleicons/A/Audiobookshelf
```

```text
include('simpleicons/A/Audiobookshelf')
```



| Illustration | Audiobookshelf |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Audiobookshelf.png) | ![illustration for Audiobookshelf](../../simpleicons/A/Audiobookshelf.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AudiobookshelfXs>`
- `<$AudiobookshelfSm>`
- `<$AudiobookshelfMd>`
- `<$AudiobookshelfLg>`





## Audiobookshelf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Audiobookshelf
include('simpleicons/A/Audiobookshelf')

' renders the element
Audiobookshelf('Audiobookshelf', 'Audiobookshelf', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Audiobookshelf
include('simpleicons/A/Audiobookshelf')

' renders the element
Audiobookshelf('Audiobookshelf', 'Audiobookshelf', 'an optional tech label', 'an optional description')
@enduml
```

