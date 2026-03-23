# FacebookSquare


```text
fontawesome/Brands/FacebookSquare
```

```text
include('fontawesome/Brands/FacebookSquare')
```



| Illustration | FacebookSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/FacebookSquare.png) | ![illustration for FacebookSquare](../../fontawesome/Brands/FacebookSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FacebookSquareXs>`
- `<$FacebookSquareSm>`
- `<$FacebookSquareMd>`
- `<$FacebookSquareLg>`





## FacebookSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FacebookSquare
include('fontawesome/Brands/FacebookSquare')

' renders the element
FacebookSquare('FacebookSquare', 'Facebook Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FacebookSquare
include('fontawesome/Brands/FacebookSquare')

' renders the element
FacebookSquare('FacebookSquare', 'Facebook Square', 'an optional tech label', 'an optional description')
@enduml
```

