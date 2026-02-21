# Ibeacon


```text
simpleicons/I/Ibeacon
```

```text
include('simpleicons/I/Ibeacon')
```



| Illustration | Ibeacon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Ibeacon.png) | ![illustration for Ibeacon](../../simpleicons/I/Ibeacon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IbeaconXs>`
- `<$IbeaconSm>`
- `<$IbeaconMd>`
- `<$IbeaconLg>`





## Ibeacon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ibeacon
include('simpleicons/I/Ibeacon')

' renders the element
Ibeacon('Ibeacon', 'Ibeacon', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ibeacon
include('simpleicons/I/Ibeacon')

' renders the element
Ibeacon('Ibeacon', 'Ibeacon', 'an optional tech label', 'an optional description')
@enduml
```

