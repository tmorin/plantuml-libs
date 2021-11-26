# Shopware


```text
fontawesome-5/Brands/Shopware
```

```text
include('fontawesome-5/Brands/Shopware')
```



| Illustration | Shopware |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Shopware.png) | ![illustration for Shopware](../../fontawesome-5/Brands/Shopware.Local.png) |




## Shopware

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Shopware
include('fontawesome-5/Brands/Shopware')

' renders the element
Shopware('Shopware', 'Shopware', 'an optional tech label')
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

' loads the Item which embeds the element Shopware
include('fontawesome-5/Brands/Shopware')

' renders the element
Shopware('Shopware', 'Shopware', 'an optional tech label')
@enduml
```

