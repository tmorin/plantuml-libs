# QrCode


```text
material/Communication/QrCode
```

```text
include('material/Communication/QrCode')
```



| Illustration | QrCode |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/QrCode.png) | ![illustration for QrCode](../../material/Communication/QrCode.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QrCodeXs>`
- `<$QrCodeSm>`
- `<$QrCodeMd>`
- `<$QrCodeLg>`





## QrCode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element QrCode
include('material/Communication/QrCode')

' renders the element
QrCode('QrCode', 'Qr Code', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element QrCode
include('material/Communication/QrCode')

' renders the element
QrCode('QrCode', 'Qr Code', 'an optional tech label', 'an optional description')
@enduml
```

