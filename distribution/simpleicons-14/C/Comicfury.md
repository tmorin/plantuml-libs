# Comicfury


```text
simpleicons-14/C/Comicfury
```

```text
include('simpleicons-14/C/Comicfury')
```



| Illustration | Comicfury |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Comicfury.png) | ![illustration for Comicfury](../../simpleicons-14/C/Comicfury.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ComicfuryXs>`
- `<$ComicfurySm>`
- `<$ComicfuryMd>`
- `<$ComicfuryLg>`





## Comicfury

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Comicfury
include('simpleicons-14/C/Comicfury')

' renders the element
Comicfury('Comicfury', 'Comicfury', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Comicfury
include('simpleicons-14/C/Comicfury')

' renders the element
Comicfury('Comicfury', 'Comicfury', 'an optional tech label', 'an optional description')
@enduml
```

