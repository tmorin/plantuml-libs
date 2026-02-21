# StarHalfStroke


```text
fontawesome/Solid/StarHalfStroke
```

```text
include('fontawesome/Solid/StarHalfStroke')
```



| Illustration | StarHalfStroke |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/StarHalfStroke.png) | ![illustration for StarHalfStroke](../../fontawesome/Solid/StarHalfStroke.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StarHalfStrokeXs>`
- `<$StarHalfStrokeSm>`
- `<$StarHalfStrokeMd>`
- `<$StarHalfStrokeLg>`





## StarHalfStroke

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element StarHalfStroke
include('fontawesome/Solid/StarHalfStroke')

' renders the element
StarHalfStroke('StarHalfStroke', 'Star Half Stroke', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element StarHalfStroke
include('fontawesome/Solid/StarHalfStroke')

' renders the element
StarHalfStroke('StarHalfStroke', 'Star Half Stroke', 'an optional tech label', 'an optional description')
@enduml
```

