# Usb


```text
fontawesome-5/Brands/Usb
```

```text
include('fontawesome-5/Brands/Usb')
```



| Illustration | Usb |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Usb.png) | ![illustration for Usb](../../fontawesome-5/Brands/Usb.Local.png) |




## Usb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Usb
include('fontawesome-5/Brands/Usb')

' renders the element
Usb('Usb', 'Usb', 'an optional tech label')
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

' loads the Item which embeds the element Usb
include('fontawesome-5/Brands/Usb')

' renders the element
Usb('Usb', 'Usb', 'an optional tech label')
@enduml
```

