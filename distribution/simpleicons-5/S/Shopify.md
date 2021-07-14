# Shopify


```text
simpleicons-5/S/Shopify
```

```text
include('simpleicons-5/S/Shopify')
```



| Illustration | Shopify |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Shopify.png) | ![illustration for Shopify](../../simpleicons-5/S/Shopify.Local.png) |




## Shopify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Shopify
include('simpleicons-5/S/Shopify')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Shopify
include('simpleicons-5/S/Shopify')

' renders the element
Shopify('Shopify', 'Shopify', 'an optional tech label')
@enduml
```

