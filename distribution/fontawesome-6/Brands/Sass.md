# Sass


```text
fontawesome-6/Brands/Sass
```

```text
include('fontawesome-6/Brands/Sass')
```



| Illustration | Sass |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Sass.png) | ![illustration for Sass](../../fontawesome-6/Brands/Sass.Local.png) |




## Sass

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Sass
include('fontawesome-6/Brands/Sass')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Sass
include('fontawesome-6/Brands/Sass')

' renders the element
Sass('Sass', 'Sass', 'an optional tech label')
@enduml
```

