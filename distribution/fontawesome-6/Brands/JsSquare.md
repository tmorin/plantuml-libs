# JsSquare


```text
fontawesome-6/Brands/JsSquare
```

```text
include('fontawesome-6/Brands/JsSquare')
```



| Illustration | JsSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/JsSquare.png) | ![illustration for JsSquare](../../fontawesome-6/Brands/JsSquare.Local.png) |




## JsSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element JsSquare
include('fontawesome-6/Brands/JsSquare')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element JsSquare
include('fontawesome-6/Brands/JsSquare')

' renders the element
JsSquare('JsSquare', 'Js Square', 'an optional tech label')
@enduml
```

