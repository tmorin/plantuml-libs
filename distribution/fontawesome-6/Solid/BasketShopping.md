# BasketShopping


```text
fontawesome-6/Solid/BasketShopping
```

```text
include('fontawesome-6/Solid/BasketShopping')
```



| Illustration | BasketShopping |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BasketShopping.png) | ![illustration for BasketShopping](../../fontawesome-6/Solid/BasketShopping.Local.png) |




## BasketShopping

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BasketShopping
include('fontawesome-6/Solid/BasketShopping')

' renders the element
BasketShopping('BasketShopping', 'Basket Shopping', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BasketShopping
include('fontawesome-6/Solid/BasketShopping')

' renders the element
BasketShopping('BasketShopping', 'Basket Shopping', 'an optional tech label', 'an optional description')
@enduml
```

