# Magento


```text
fontawesome/Brands/Magento
```

```text
include('fontawesome/Brands/Magento')
```



| Illustration | Magento |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Magento.png) | ![illustration for Magento](../../fontawesome/Brands/Magento.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MagentoXs>`
- `<$MagentoSm>`
- `<$MagentoMd>`
- `<$MagentoLg>`





## Magento

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Magento
include('fontawesome/Brands/Magento')

' renders the element
Magento('Magento', 'Magento', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Magento
include('fontawesome/Brands/Magento')

' renders the element
Magento('Magento', 'Magento', 'an optional tech label', 'an optional description')
@enduml
```

