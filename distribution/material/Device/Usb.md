# Usb


```text
material/Device/Usb
```

```text
include('material/Device/Usb')
```



| Illustration | Usb |
| :---: | :---: |
| ![illustration for Illustration](../../material/Device/Usb.png) | ![illustration for Usb](../../material/Device/Usb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UsbXs>`
- `<$UsbSm>`
- `<$UsbMd>`
- `<$UsbLg>`





## Usb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Usb
include('material/Device/Usb')

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
include('material/bootstrap')

' loads the Item which embeds the element Usb
include('material/Device/Usb')

' renders the element
Usb('Usb', 'Usb', 'an optional tech label', 'an optional description')
@enduml
```

