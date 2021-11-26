# BuyNLarge


```text
fontawesome-5/Brands/BuyNLarge
```

```text
include('fontawesome-5/Brands/BuyNLarge')
```



| Illustration | BuyNLarge |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/BuyNLarge.png) | ![illustration for BuyNLarge](../../fontawesome-5/Brands/BuyNLarge.Local.png) |




## BuyNLarge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BuyNLarge
include('fontawesome-5/Brands/BuyNLarge')

' renders the element
BuyNLarge('BuyNLarge', 'Buy N Large', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BuyNLarge
include('fontawesome-5/Brands/BuyNLarge')

' renders the element
BuyNLarge('BuyNLarge', 'Buy N Large', 'an optional tech label')
@enduml
```

