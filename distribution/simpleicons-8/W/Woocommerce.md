# Woocommerce


```text
simpleicons-8/W/Woocommerce
```

```text
include('simpleicons-8/W/Woocommerce')
```



| Illustration | Woocommerce |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/W/Woocommerce.png) | ![illustration for Woocommerce](../../simpleicons-8/W/Woocommerce.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WoocommerceXs>`
- `<$WoocommerceSm>`
- `<$WoocommerceMd>`
- `<$WoocommerceLg>`





## Woocommerce

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Woocommerce
include('simpleicons-8/W/Woocommerce')

' renders the element
Woocommerce('Woocommerce', 'Woocommerce', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Woocommerce
include('simpleicons-8/W/Woocommerce')

' renders the element
Woocommerce('Woocommerce', 'Woocommerce', 'an optional tech label', 'an optional description')
@enduml
```

