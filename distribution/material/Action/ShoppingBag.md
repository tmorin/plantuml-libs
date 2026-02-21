# ShoppingBag


```text
material/Action/ShoppingBag
```

```text
include('material/Action/ShoppingBag')
```



| Illustration | ShoppingBag |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/ShoppingBag.png) | ![illustration for ShoppingBag](../../material/Action/ShoppingBag.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShoppingBagXs>`
- `<$ShoppingBagSm>`
- `<$ShoppingBagMd>`
- `<$ShoppingBagLg>`





## ShoppingBag

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ShoppingBag
include('material/Action/ShoppingBag')

' renders the element
ShoppingBag('ShoppingBag', 'Shopping Bag', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element ShoppingBag
include('material/Action/ShoppingBag')

' renders the element
ShoppingBag('ShoppingBag', 'Shopping Bag', 'an optional tech label', 'an optional description')
@enduml
```

