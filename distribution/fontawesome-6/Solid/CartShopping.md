# CartShopping


```text
fontawesome-6/Solid/CartShopping
```

```text
include('fontawesome-6/Solid/CartShopping')
```



| Illustration | CartShopping |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CartShopping.png) | ![illustration for CartShopping](../../fontawesome-6/Solid/CartShopping.Local.png) |




## CartShopping

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CartShopping
include('fontawesome-6/Solid/CartShopping')

' renders the element
CartShopping('CartShopping', 'Cart Shopping', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CartShopping
include('fontawesome-6/Solid/CartShopping')

' renders the element
CartShopping('CartShopping', 'Cart Shopping', 'an optional tech label', 'an optional description')
@enduml
```

