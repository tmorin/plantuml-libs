# Usb


```text
fontawesome-6/Brands/Usb
```

```text
include('fontawesome-6/Brands/Usb')
```



| Illustration | Usb |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Usb.png) | ![illustration for Usb](../../fontawesome-6/Brands/Usb.Local.png) |




## Usb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Usb
include('fontawesome-6/Brands/Usb')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Usb
include('fontawesome-6/Brands/Usb')

' renders the element
Usb('Usb', 'Usb', 'an optional tech label')
@enduml
```

