# Ebay


```text
fontawesome/Brands/Ebay
```

```text
include('fontawesome/Brands/Ebay')
```



| Illustration | Ebay |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Ebay.png) | ![illustration for Ebay](../../fontawesome/Brands/Ebay.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EbayXs>`
- `<$EbaySm>`
- `<$EbayMd>`
- `<$EbayLg>`





## Ebay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Ebay
include('fontawesome/Brands/Ebay')

' renders the element
Ebay('Ebay', 'Ebay', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ebay
include('fontawesome/Brands/Ebay')

' renders the element
Ebay('Ebay', 'Ebay', 'an optional tech label', 'an optional description')
@enduml
```

