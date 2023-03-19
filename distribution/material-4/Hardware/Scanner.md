# Scanner


```text
material-4/Hardware/Scanner
```

```text
include('material-4/Hardware/Scanner')
```



| Illustration | Scanner |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/Scanner.png) | ![illustration for Scanner](../../material-4/Hardware/Scanner.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ScannerXs>`
- `<$ScannerSm>`
- `<$ScannerMd>`
- `<$ScannerLg>`





## Scanner

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Scanner
include('material-4/Hardware/Scanner')

' renders the element
Scanner('Scanner', 'Scanner', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Scanner
include('material-4/Hardware/Scanner')

' renders the element
Scanner('Scanner', 'Scanner', 'an optional tech label', 'an optional description')
@enduml
```

