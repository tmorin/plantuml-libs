# Js


```text
fontawesome/Brands/Js
```

```text
include('fontawesome/Brands/Js')
```



| Illustration | Js |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Js.png) | ![illustration for Js](../../fontawesome/Brands/Js.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JsXs>`
- `<$JsSm>`
- `<$JsMd>`
- `<$JsLg>`





## Js

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Js
include('fontawesome/Brands/Js')

' renders the element
Js('Js', 'Js', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Js
include('fontawesome/Brands/Js')

' renders the element
Js('Js', 'Js', 'an optional tech label', 'an optional description')
@enduml
```

