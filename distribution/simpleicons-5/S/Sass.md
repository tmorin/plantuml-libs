# Sass


```text
simpleicons-5/S/Sass
```

```text
include('simpleicons-5/S/Sass')
```



| Illustration | Sass |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Sass.png) | ![illustration for Sass](../../simpleicons-5/S/Sass.Local.png) |




## Sass

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Sass
include('simpleicons-5/S/Sass')

' renders the element
Sass('Sass', 'Sass', 'an optional tech label')
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

' loads the Item which embeds the element Sass
include('simpleicons-5/S/Sass')

' renders the element
Sass('Sass', 'Sass', 'an optional tech label')
@enduml
```

