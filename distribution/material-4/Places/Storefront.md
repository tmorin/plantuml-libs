# Storefront


```text
material-4/Places/Storefront
```

```text
include('material-4/Places/Storefront')
```



| Illustration | Storefront |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/Storefront.png) | ![illustration for Storefront](../../material-4/Places/Storefront.Local.png) |




## Storefront

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Storefront
include('material-4/Places/Storefront')

' renders the element
Storefront('Storefront', 'Storefront', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Storefront
include('material-4/Places/Storefront')

' renders the element
Storefront('Storefront', 'Storefront', 'an optional tech label')
@enduml
```

