# QrCode


```text
material-4/Communication/QrCode
```

```text
include('material-4/Communication/QrCode')
```



| Illustration | QrCode |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/QrCode.png) | ![illustration for QrCode](../../material-4/Communication/QrCode.Local.png) |




## QrCode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element QrCode
include('material-4/Communication/QrCode')

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
include('material-4/bootstrap')

' loads the Item which embeds the element QrCode
include('material-4/Communication/QrCode')

' renders the element
QrCode('QrCode', 'Qr Code', 'an optional tech label', 'an optional description')
@enduml
```

