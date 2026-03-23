# PinterestSquare


```text
fontawesome/Brands/PinterestSquare
```

```text
include('fontawesome/Brands/PinterestSquare')
```



| Illustration | PinterestSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/PinterestSquare.png) | ![illustration for PinterestSquare](../../fontawesome/Brands/PinterestSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PinterestSquareXs>`
- `<$PinterestSquareSm>`
- `<$PinterestSquareMd>`
- `<$PinterestSquareLg>`





## PinterestSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PinterestSquare
include('fontawesome/Brands/PinterestSquare')

' renders the element
PinterestSquare('PinterestSquare', 'Pinterest Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PinterestSquare
include('fontawesome/Brands/PinterestSquare')

' renders the element
PinterestSquare('PinterestSquare', 'Pinterest Square', 'an optional tech label', 'an optional description')
@enduml
```

