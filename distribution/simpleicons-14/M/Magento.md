# Magento


```text
simpleicons-14/M/Magento
```

```text
include('simpleicons-14/M/Magento')
```



| Illustration | Magento |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Magento.png) | ![illustration for Magento](../../simpleicons-14/M/Magento.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Magento
include('simpleicons-14/M/Magento')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Magento
include('simpleicons-14/M/Magento')

' renders the element
Magento('Magento', 'Magento', 'an optional tech label', 'an optional description')
@enduml
```

