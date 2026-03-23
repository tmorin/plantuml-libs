# FilmAlt


```text
fontawesome/Solid/FilmAlt
```

```text
include('fontawesome/Solid/FilmAlt')
```



| Illustration | FilmAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FilmAlt.png) | ![illustration for FilmAlt](../../fontawesome/Solid/FilmAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FilmAltXs>`
- `<$FilmAltSm>`
- `<$FilmAltMd>`
- `<$FilmAltLg>`





## FilmAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FilmAlt
include('fontawesome/Solid/FilmAlt')

' renders the element
FilmAlt('FilmAlt', 'Film Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FilmAlt
include('fontawesome/Solid/FilmAlt')

' renders the element
FilmAlt('FilmAlt', 'Film Alt', 'an optional tech label', 'an optional description')
@enduml
```

