# JsSquare


```text
fontawesome-5/Brands/JsSquare
```

```text
include('fontawesome-5/Brands/JsSquare')
```



| Illustration | JsSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/JsSquare.png) | ![illustration for JsSquare](../../fontawesome-5/Brands/JsSquare.Local.png) |




## JsSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element JsSquare
include('fontawesome-5/Brands/JsSquare')

' renders the element
JsSquare('JsSquare', 'Js Square', 'an optional tech label')
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

' loads the Item which embeds the element JsSquare
include('fontawesome-5/Brands/JsSquare')

' renders the element
JsSquare('JsSquare', 'Js Square', 'an optional tech label')
@enduml
```

