# JsSquare


```text
fontawesome/Brands/JsSquare
```

```text
include('fontawesome/Brands/JsSquare')
```



| Illustration | JsSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/JsSquare.png) | ![illustration for JsSquare](../../fontawesome/Brands/JsSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JsSquareXs>`
- `<$JsSquareSm>`
- `<$JsSquareMd>`
- `<$JsSquareLg>`





## JsSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element JsSquare
include('fontawesome/Brands/JsSquare')

' renders the element
JsSquare('JsSquare', 'Js Square', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element JsSquare
include('fontawesome/Brands/JsSquare')

' renders the element
JsSquare('JsSquare', 'Js Square', 'an optional tech label', 'an optional description')
@enduml
```

