# Gulp


```text
simpleicons-5/G/Gulp
```

```text
include('simpleicons-5/G/Gulp')
```



| Illustration | Gulp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Gulp.png) | ![illustration for Gulp](../../simpleicons-5/G/Gulp.Local.png) |




## Gulp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gulp
include('simpleicons-5/G/Gulp')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gulp
include('simpleicons-5/G/Gulp')

' renders the element
Gulp('Gulp', 'Gulp', 'an optional tech label')
@enduml
```

