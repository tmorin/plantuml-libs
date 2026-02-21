# Scanner


```text
material/Hardware/Scanner
```

```text
include('material/Hardware/Scanner')
```



| Illustration | Scanner |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/Scanner.png) | ![illustration for Scanner](../../material/Hardware/Scanner.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element Scanner
include('material/Hardware/Scanner')

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
include('material/bootstrap')

' loads the Item which embeds the element Scanner
include('material/Hardware/Scanner')

' renders the element
Scanner('Scanner', 'Scanner', 'an optional tech label', 'an optional description')
@enduml
```

