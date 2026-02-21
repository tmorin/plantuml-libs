# Gulp


```text
fontawesome/Brands/Gulp
```

```text
include('fontawesome/Brands/Gulp')
```



| Illustration | Gulp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Gulp.png) | ![illustration for Gulp](../../fontawesome/Brands/Gulp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GulpXs>`
- `<$GulpSm>`
- `<$GulpMd>`
- `<$GulpLg>`





## Gulp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Gulp
include('fontawesome/Brands/Gulp')

' renders the element
Gulp('Gulp', 'Gulp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gulp
include('fontawesome/Brands/Gulp')

' renders the element
Gulp('Gulp', 'Gulp', 'an optional tech label', 'an optional description')
@enduml
```

