# Gulp


```text
fontawesome-5/Brands/Gulp
```

```text
include('fontawesome-5/Brands/Gulp')
```



| Illustration | Gulp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Gulp.png) | ![illustration for Gulp](../../fontawesome-5/Brands/Gulp.Local.png) |




## Gulp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Gulp
include('fontawesome-5/Brands/Gulp')

' renders the element
Gulp('Gulp', 'Gulp', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Gulp
include('fontawesome-5/Brands/Gulp')

' renders the element
Gulp('Gulp', 'Gulp', 'an optional tech label')
@enduml
```

