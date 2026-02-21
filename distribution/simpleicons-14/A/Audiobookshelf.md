# Audiobookshelf


```text
simpleicons-14/A/Audiobookshelf
```

```text
include('simpleicons-14/A/Audiobookshelf')
```



| Illustration | Audiobookshelf |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Audiobookshelf.png) | ![illustration for Audiobookshelf](../../simpleicons-14/A/Audiobookshelf.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Audiobookshelf
include('simpleicons-14/A/Audiobookshelf')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Audiobookshelf
include('simpleicons-14/A/Audiobookshelf')

' renders the element
Audiobookshelf('Audiobookshelf', 'Audiobookshelf', 'an optional tech label', 'an optional description')
@enduml
```

