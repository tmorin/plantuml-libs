# StreetView


```text
fontawesome/Solid/StreetView
```

```text
include('fontawesome/Solid/StreetView')
```



| Illustration | StreetView |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/StreetView.png) | ![illustration for StreetView](../../fontawesome/Solid/StreetView.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StreetViewXs>`
- `<$StreetViewSm>`
- `<$StreetViewMd>`
- `<$StreetViewLg>`





## StreetView

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element StreetView
include('fontawesome/Solid/StreetView')

' renders the element
StreetView('StreetView', 'Street View', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element StreetView
include('fontawesome/Solid/StreetView')

' renders the element
StreetView('StreetView', 'Street View', 'an optional tech label', 'an optional description')
@enduml
```

