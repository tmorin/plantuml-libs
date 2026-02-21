# PointOfSale


```text
material/Hardware/PointOfSale
```

```text
include('material/Hardware/PointOfSale')
```



| Illustration | PointOfSale |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/PointOfSale.png) | ![illustration for PointOfSale](../../material/Hardware/PointOfSale.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PointOfSaleXs>`
- `<$PointOfSaleSm>`
- `<$PointOfSaleMd>`
- `<$PointOfSaleLg>`





## PointOfSale

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PointOfSale
include('material/Hardware/PointOfSale')

' renders the element
PointOfSale('PointOfSale', 'Point Of Sale', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PointOfSale
include('material/Hardware/PointOfSale')

' renders the element
PointOfSale('PointOfSale', 'Point Of Sale', 'an optional tech label', 'an optional description')
@enduml
```

