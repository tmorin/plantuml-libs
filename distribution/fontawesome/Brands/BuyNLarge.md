# BuyNLarge


```text
fontawesome/Brands/BuyNLarge
```

```text
include('fontawesome/Brands/BuyNLarge')
```



| Illustration | BuyNLarge |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/BuyNLarge.png) | ![illustration for BuyNLarge](../../fontawesome/Brands/BuyNLarge.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BuyNLargeXs>`
- `<$BuyNLargeSm>`
- `<$BuyNLargeMd>`
- `<$BuyNLargeLg>`





## BuyNLarge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BuyNLarge
include('fontawesome/Brands/BuyNLarge')

' renders the element
BuyNLarge('BuyNLarge', 'Buy N Large', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BuyNLarge
include('fontawesome/Brands/BuyNLarge')

' renders the element
BuyNLarge('BuyNLarge', 'Buy N Large', 'an optional tech label', 'an optional description')
@enduml
```

