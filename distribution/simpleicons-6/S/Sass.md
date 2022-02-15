# Sass


```text
simpleicons-6/S/Sass
```

```text
include('simpleicons-6/S/Sass')
```



| Illustration | Sass |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Sass.png) | ![illustration for Sass](../../simpleicons-6/S/Sass.Local.png) |




## Sass

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Sass
include('simpleicons-6/S/Sass')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Sass
include('simpleicons-6/S/Sass')

' renders the element
Sass('Sass', 'Sass', 'an optional tech label')
@enduml
```

