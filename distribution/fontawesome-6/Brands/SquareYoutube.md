# SquareYoutube


```text
fontawesome-6/Brands/SquareYoutube
```

```text
include('fontawesome-6/Brands/SquareYoutube')
```



| Illustration | SquareYoutube |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/SquareYoutube.png) | ![illustration for SquareYoutube](../../fontawesome-6/Brands/SquareYoutube.Local.png) |




## SquareYoutube

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareYoutube
include('fontawesome-6/Brands/SquareYoutube')

' renders the element
SquareYoutube('SquareYoutube', 'Square Youtube', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareYoutube
include('fontawesome-6/Brands/SquareYoutube')

' renders the element
SquareYoutube('SquareYoutube', 'Square Youtube', 'an optional tech label', 'an optional description')
@enduml
```

