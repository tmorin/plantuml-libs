# Qrcode


```text
fontawesome-5/Solid/Qrcode
```

```text
include('fontawesome-5/Solid/Qrcode')
```



| Illustration | Qrcode |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Qrcode.png) | ![illustration for Qrcode](../../fontawesome-5/Solid/Qrcode.Local.png) |




## Qrcode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Qrcode
include('fontawesome-5/Solid/Qrcode')

' renders the element
Qrcode('Qrcode', 'Qrcode', 'an optional tech label')
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

' loads the Item which embeds the element Qrcode
include('fontawesome-5/Solid/Qrcode')

' renders the element
Qrcode('Qrcode', 'Qrcode', 'an optional tech label')
@enduml
```

