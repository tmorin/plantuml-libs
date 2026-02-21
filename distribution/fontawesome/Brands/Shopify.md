# Shopify


```text
fontawesome/Brands/Shopify
```

```text
include('fontawesome/Brands/Shopify')
```



| Illustration | Shopify |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Shopify.png) | ![illustration for Shopify](../../fontawesome/Brands/Shopify.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShopifyXs>`
- `<$ShopifySm>`
- `<$ShopifyMd>`
- `<$ShopifyLg>`





## Shopify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Shopify
include('fontawesome/Brands/Shopify')

' renders the element
Shopify('Shopify', 'Shopify', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Shopify
include('fontawesome/Brands/Shopify')

' renders the element
Shopify('Shopify', 'Shopify', 'an optional tech label', 'an optional description')
@enduml
```

