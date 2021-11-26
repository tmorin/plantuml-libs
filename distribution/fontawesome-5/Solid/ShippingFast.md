# ShippingFast


```text
fontawesome-5/Solid/ShippingFast
```

```text
include('fontawesome-5/Solid/ShippingFast')
```



| Illustration | ShippingFast |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ShippingFast.png) | ![illustration for ShippingFast](../../fontawesome-5/Solid/ShippingFast.Local.png) |




## ShippingFast

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ShippingFast
include('fontawesome-5/Solid/ShippingFast')

' renders the element
ShippingFast('ShippingFast', 'Shipping Fast', 'an optional tech label')
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

' loads the Item which embeds the element ShippingFast
include('fontawesome-5/Solid/ShippingFast')

' renders the element
ShippingFast('ShippingFast', 'Shipping Fast', 'an optional tech label')
@enduml
```

