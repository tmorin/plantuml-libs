# Gulp


```text
simpleicons-8/G/Gulp
```

```text
include('simpleicons-8/G/Gulp')
```



| Illustration | Gulp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Gulp.png) | ![illustration for Gulp](../../simpleicons-8/G/Gulp.Local.png) |




## Gulp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Gulp
include('simpleicons-8/G/Gulp')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Gulp
include('simpleicons-8/G/Gulp')

' renders the element
Gulp('Gulp', 'Gulp', 'an optional tech label', 'an optional description')
@enduml
```

