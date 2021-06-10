# ShoppingBag


```text
fontawesome-5/Solid/ShoppingBag
```

```text
include('fontawesome-5/Solid/ShoppingBag')
```



| Illustration | ShoppingBag |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ShoppingBag.png) | ![illustration for ShoppingBag](../../fontawesome-5/Solid/ShoppingBag.Local.png) |




## ShoppingBag

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ShoppingBag
include('fontawesome-5/Solid/ShoppingBag')

' renders the element
ShoppingBag('ShoppingBag', 'Shopping Bag', 'an optional tech label')
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

' loads the Item which embeds the element ShoppingBag
include('fontawesome-5/Solid/ShoppingBag')

' renders the element
ShoppingBag('ShoppingBag', 'Shopping Bag', 'an optional tech label')
@enduml
```

