# SquareOdnoklassniki


```text
fontawesome/Brands/SquareOdnoklassniki
```

```text
include('fontawesome/Brands/SquareOdnoklassniki')
```



| Illustration | SquareOdnoklassniki |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/SquareOdnoklassniki.png) | ![illustration for SquareOdnoklassniki](../../fontawesome/Brands/SquareOdnoklassniki.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareOdnoklassnikiXs>`
- `<$SquareOdnoklassnikiSm>`
- `<$SquareOdnoklassnikiMd>`
- `<$SquareOdnoklassnikiLg>`





## SquareOdnoklassniki

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareOdnoklassniki
include('fontawesome/Brands/SquareOdnoklassniki')

' renders the element
SquareOdnoklassniki('SquareOdnoklassniki', 'Square Odnoklassniki', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareOdnoklassniki
include('fontawesome/Brands/SquareOdnoklassniki')

' renders the element
SquareOdnoklassniki('SquareOdnoklassniki', 'Square Odnoklassniki', 'an optional tech label', 'an optional description')
@enduml
```

