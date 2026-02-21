# Scan


```text
simpleicons-14/S/Scan
```

```text
include('simpleicons-14/S/Scan')
```



| Illustration | Scan |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Scan.png) | ![illustration for Scan](../../simpleicons-14/S/Scan.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ScanXs>`
- `<$ScanSm>`
- `<$ScanMd>`
- `<$ScanLg>`





## Scan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Scan
include('simpleicons-14/S/Scan')

' renders the element
Scan('Scan', 'Scan', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Scan
include('simpleicons-14/S/Scan')

' renders the element
Scan('Scan', 'Scan', 'an optional tech label', 'an optional description')
@enduml
```

