# DialerSip


```text
material-4/Communication/DialerSip
```

```text
include('material-4/Communication/DialerSip')
```



| Illustration | DialerSip |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/DialerSip.png) | ![illustration for DialerSip](../../material-4/Communication/DialerSip.Local.png) |




## DialerSip

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DialerSip
include('material-4/Communication/DialerSip')

' renders the element
DialerSip('DialerSip', 'Dialer Sip', 'an optional tech label')
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

' loads the Item which embeds the element DialerSip
include('material-4/Communication/DialerSip')

' renders the element
DialerSip('DialerSip', 'Dialer Sip', 'an optional tech label')
@enduml
```

