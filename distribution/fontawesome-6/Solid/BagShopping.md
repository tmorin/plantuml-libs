# BagShopping


```text
fontawesome-6/Solid/BagShopping
```

```text
include('fontawesome-6/Solid/BagShopping')
```



| Illustration | BagShopping |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BagShopping.png) | ![illustration for BagShopping](../../fontawesome-6/Solid/BagShopping.Local.png) |




## BagShopping

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BagShopping
include('fontawesome-6/Solid/BagShopping')

' renders the element
BagShopping('BagShopping', 'Bag Shopping', 'an optional tech label')
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

' loads the Item which embeds the element BagShopping
include('fontawesome-6/Solid/BagShopping')

' renders the element
BagShopping('BagShopping', 'Bag Shopping', 'an optional tech label')
@enduml
```

