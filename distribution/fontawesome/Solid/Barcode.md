# Barcode


```text
fontawesome/Solid/Barcode
```

```text
include('fontawesome/Solid/Barcode')
```



| Illustration | Barcode |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Barcode.png) | ![illustration for Barcode](../../fontawesome/Solid/Barcode.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BarcodeXs>`
- `<$BarcodeSm>`
- `<$BarcodeMd>`
- `<$BarcodeLg>`





## Barcode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Barcode
include('fontawesome/Solid/Barcode')

' renders the element
Barcode('Barcode', 'Barcode', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Barcode
include('fontawesome/Solid/Barcode')

' renders the element
Barcode('Barcode', 'Barcode', 'an optional tech label', 'an optional description')
@enduml
```

