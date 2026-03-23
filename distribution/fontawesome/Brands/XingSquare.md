# XingSquare


```text
fontawesome/Brands/XingSquare
```

```text
include('fontawesome/Brands/XingSquare')
```



| Illustration | XingSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/XingSquare.png) | ![illustration for XingSquare](../../fontawesome/Brands/XingSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$XingSquareXs>`
- `<$XingSquareSm>`
- `<$XingSquareMd>`
- `<$XingSquareLg>`





## XingSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element XingSquare
include('fontawesome/Brands/XingSquare')

' renders the element
XingSquare('XingSquare', 'Xing Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element XingSquare
include('fontawesome/Brands/XingSquare')

' renders the element
XingSquare('XingSquare', 'Xing Square', 'an optional tech label', 'an optional description')
@enduml
```

