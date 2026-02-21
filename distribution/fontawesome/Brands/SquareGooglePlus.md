# SquareGooglePlus


```text
fontawesome/Brands/SquareGooglePlus
```

```text
include('fontawesome/Brands/SquareGooglePlus')
```



| Illustration | SquareGooglePlus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/SquareGooglePlus.png) | ![illustration for SquareGooglePlus](../../fontawesome/Brands/SquareGooglePlus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareGooglePlusXs>`
- `<$SquareGooglePlusSm>`
- `<$SquareGooglePlusMd>`
- `<$SquareGooglePlusLg>`





## SquareGooglePlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareGooglePlus
include('fontawesome/Brands/SquareGooglePlus')

' renders the element
SquareGooglePlus('SquareGooglePlus', 'Square Google Plus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareGooglePlus
include('fontawesome/Brands/SquareGooglePlus')

' renders the element
SquareGooglePlus('SquareGooglePlus', 'Square Google Plus', 'an optional tech label', 'an optional description')
@enduml
```

