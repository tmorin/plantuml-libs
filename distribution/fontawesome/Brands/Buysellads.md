# Buysellads


```text
fontawesome/Brands/Buysellads
```

```text
include('fontawesome/Brands/Buysellads')
```



| Illustration | Buysellads |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Buysellads.png) | ![illustration for Buysellads](../../fontawesome/Brands/Buysellads.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BuyselladsXs>`
- `<$BuyselladsSm>`
- `<$BuyselladsMd>`
- `<$BuyselladsLg>`





## Buysellads

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Buysellads
include('fontawesome/Brands/Buysellads')

' renders the element
Buysellads('Buysellads', 'Buysellads', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Buysellads
include('fontawesome/Brands/Buysellads')

' renders the element
Buysellads('Buysellads', 'Buysellads', 'an optional tech label', 'an optional description')
@enduml
```

