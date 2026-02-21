# LocalShipping


```text
material/Maps/LocalShipping
```

```text
include('material/Maps/LocalShipping')
```



| Illustration | LocalShipping |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/LocalShipping.png) | ![illustration for LocalShipping](../../material/Maps/LocalShipping.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocalShippingXs>`
- `<$LocalShippingSm>`
- `<$LocalShippingMd>`
- `<$LocalShippingLg>`





## LocalShipping

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LocalShipping
include('material/Maps/LocalShipping')

' renders the element
LocalShipping('LocalShipping', 'Local Shipping', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element LocalShipping
include('material/Maps/LocalShipping')

' renders the element
LocalShipping('LocalShipping', 'Local Shipping', 'an optional tech label', 'an optional description')
@enduml
```

