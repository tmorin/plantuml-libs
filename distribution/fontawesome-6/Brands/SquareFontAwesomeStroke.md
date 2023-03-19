# SquareFontAwesomeStroke


```text
fontawesome-6/Brands/SquareFontAwesomeStroke
```

```text
include('fontawesome-6/Brands/SquareFontAwesomeStroke')
```



| Illustration | SquareFontAwesomeStroke |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/SquareFontAwesomeStroke.png) | ![illustration for SquareFontAwesomeStroke](../../fontawesome-6/Brands/SquareFontAwesomeStroke.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareFontAwesomeStrokeXs>`
- `<$SquareFontAwesomeStrokeSm>`
- `<$SquareFontAwesomeStrokeMd>`
- `<$SquareFontAwesomeStrokeLg>`





## SquareFontAwesomeStroke

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareFontAwesomeStroke
include('fontawesome-6/Brands/SquareFontAwesomeStroke')

' renders the element
SquareFontAwesomeStroke('SquareFontAwesomeStroke', 'Square Font Awesome Stroke', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareFontAwesomeStroke
include('fontawesome-6/Brands/SquareFontAwesomeStroke')

' renders the element
SquareFontAwesomeStroke('SquareFontAwesomeStroke', 'Square Font Awesome Stroke', 'an optional tech label', 'an optional description')
@enduml
```

