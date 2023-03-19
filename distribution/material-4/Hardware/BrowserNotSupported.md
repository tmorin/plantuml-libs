# BrowserNotSupported


```text
material-4/Hardware/BrowserNotSupported
```

```text
include('material-4/Hardware/BrowserNotSupported')
```



| Illustration | BrowserNotSupported |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/BrowserNotSupported.png) | ![illustration for BrowserNotSupported](../../material-4/Hardware/BrowserNotSupported.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BrowserNotSupportedXs>`
- `<$BrowserNotSupportedSm>`
- `<$BrowserNotSupportedMd>`
- `<$BrowserNotSupportedLg>`





## BrowserNotSupported

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BrowserNotSupported
include('material-4/Hardware/BrowserNotSupported')

' renders the element
BrowserNotSupported('BrowserNotSupported', 'Browser Not Supported', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BrowserNotSupported
include('material-4/Hardware/BrowserNotSupported')

' renders the element
BrowserNotSupported('BrowserNotSupported', 'Browser Not Supported', 'an optional tech label', 'an optional description')
@enduml
```

