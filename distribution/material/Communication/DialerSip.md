# DialerSip


```text
material/Communication/DialerSip
```

```text
include('material/Communication/DialerSip')
```



| Illustration | DialerSip |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/DialerSip.png) | ![illustration for DialerSip](../../material/Communication/DialerSip.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DialerSipXs>`
- `<$DialerSipSm>`
- `<$DialerSipMd>`
- `<$DialerSipLg>`





## DialerSip

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element DialerSip
include('material/Communication/DialerSip')

' renders the element
DialerSip('DialerSip', 'Dialer Sip', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DialerSip
include('material/Communication/DialerSip')

' renders the element
DialerSip('DialerSip', 'Dialer Sip', 'an optional tech label', 'an optional description')
@enduml
```

