# Sass


```text
simpleicons-8/S/Sass
```

```text
include('simpleicons-8/S/Sass')
```



| Illustration | Sass |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Sass.png) | ![illustration for Sass](../../simpleicons-8/S/Sass.Local.png) |




## Sass

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Sass
include('simpleicons-8/S/Sass')

' renders the element
Sass('Sass', 'Sass', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sass
include('simpleicons-8/S/Sass')

' renders the element
Sass('Sass', 'Sass', 'an optional tech label', 'an optional description')
@enduml
```
