# ViadeoSquare


```text
fontawesome/Brands/ViadeoSquare
```

```text
include('fontawesome/Brands/ViadeoSquare')
```



| Illustration | ViadeoSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/ViadeoSquare.png) | ![illustration for ViadeoSquare](../../fontawesome/Brands/ViadeoSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ViadeoSquareXs>`
- `<$ViadeoSquareSm>`
- `<$ViadeoSquareMd>`
- `<$ViadeoSquareLg>`





## ViadeoSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ViadeoSquare
include('fontawesome/Brands/ViadeoSquare')

' renders the element
ViadeoSquare('ViadeoSquare', 'Viadeo Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ViadeoSquare
include('fontawesome/Brands/ViadeoSquare')

' renders the element
ViadeoSquare('ViadeoSquare', 'Viadeo Square', 'an optional tech label', 'an optional description')
@enduml
```

