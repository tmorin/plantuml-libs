# FilmSimple


```text
fontawesome/Solid/FilmSimple
```

```text
include('fontawesome/Solid/FilmSimple')
```



| Illustration | FilmSimple |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FilmSimple.png) | ![illustration for FilmSimple](../../fontawesome/Solid/FilmSimple.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FilmSimpleXs>`
- `<$FilmSimpleSm>`
- `<$FilmSimpleMd>`
- `<$FilmSimpleLg>`





## FilmSimple

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FilmSimple
include('fontawesome/Solid/FilmSimple')

' renders the element
FilmSimple('FilmSimple', 'Film Simple', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FilmSimple
include('fontawesome/Solid/FilmSimple')

' renders the element
FilmSimple('FilmSimple', 'Film Simple', 'an optional tech label', 'an optional description')
@enduml
```

