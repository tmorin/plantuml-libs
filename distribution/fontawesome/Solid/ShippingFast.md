# ShippingFast


```text
fontawesome/Solid/ShippingFast
```

```text
include('fontawesome/Solid/ShippingFast')
```



| Illustration | ShippingFast |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ShippingFast.png) | ![illustration for ShippingFast](../../fontawesome/Solid/ShippingFast.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShippingFastXs>`
- `<$ShippingFastSm>`
- `<$ShippingFastMd>`
- `<$ShippingFastLg>`





## ShippingFast

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ShippingFast
include('fontawesome/Solid/ShippingFast')

' renders the element
ShippingFast('ShippingFast', 'Shipping Fast', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ShippingFast
include('fontawesome/Solid/ShippingFast')

' renders the element
ShippingFast('ShippingFast', 'Shipping Fast', 'an optional tech label', 'an optional description')
@enduml
```

