# Shopify


```text
fontawesome-6/Brands/Shopify
```

```text
include('fontawesome-6/Brands/Shopify')
```



| Illustration | Shopify |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Shopify.png) | ![illustration for Shopify](../../fontawesome-6/Brands/Shopify.Local.png) |




## Shopify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Shopify
include('fontawesome-6/Brands/Shopify')

' renders the element
Shopify('Shopify', 'Shopify', 'an optional tech label')
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

' loads the Item which embeds the element Shopify
include('fontawesome-6/Brands/Shopify')

' renders the element
Shopify('Shopify', 'Shopify', 'an optional tech label')
@enduml
```

