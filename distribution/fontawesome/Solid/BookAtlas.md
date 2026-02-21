# BookAtlas


```text
fontawesome/Solid/BookAtlas
```

```text
include('fontawesome/Solid/BookAtlas')
```



| Illustration | BookAtlas |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BookAtlas.png) | ![illustration for BookAtlas](../../fontawesome/Solid/BookAtlas.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BookAtlasXs>`
- `<$BookAtlasSm>`
- `<$BookAtlasMd>`
- `<$BookAtlasLg>`





## BookAtlas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BookAtlas
include('fontawesome/Solid/BookAtlas')

' renders the element
BookAtlas('BookAtlas', 'Book Atlas', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element BookAtlas
include('fontawesome/Solid/BookAtlas')

' renders the element
BookAtlas('BookAtlas', 'Book Atlas', 'an optional tech label', 'an optional description')
@enduml
```

