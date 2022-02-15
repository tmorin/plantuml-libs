# Magento


```text
fontawesome-6/Brands/Magento
```

```text
include('fontawesome-6/Brands/Magento')
```



| Illustration | Magento |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Magento.png) | ![illustration for Magento](../../fontawesome-6/Brands/Magento.Local.png) |




## Magento

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Magento
include('fontawesome-6/Brands/Magento')

' renders the element
Magento('Magento', 'Magento', 'an optional tech label')
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

' loads the Item which embeds the element Magento
include('fontawesome-6/Brands/Magento')

' renders the element
Magento('Magento', 'Magento', 'an optional tech label')
@enduml
```

