# Usb


```text
material-4/Device/Usb
```

```text
include('material-4/Device/Usb')
```



| Illustration | Usb |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/Usb.png) | ![illustration for Usb](../../material-4/Device/Usb.Local.png) |




## Usb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Usb
include('material-4/Device/Usb')

' renders the element
Usb('Usb', 'Usb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Usb
include('material-4/Device/Usb')

' renders the element
Usb('Usb', 'Usb', 'an optional tech label', 'an optional description')
@enduml
```

