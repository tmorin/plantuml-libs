# Smrt


```text
simpleicons/S/Smrt
```

```text
include('simpleicons/S/Smrt')
```



| Illustration | Smrt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Smrt.png) | ![illustration for Smrt](../../simpleicons/S/Smrt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SmrtXs>`
- `<$SmrtSm>`
- `<$SmrtMd>`
- `<$SmrtLg>`





## Smrt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Smrt
include('simpleicons/S/Smrt')

' renders the element
Smrt('Smrt', 'Smrt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Smrt
include('simpleicons/S/Smrt')

' renders the element
Smrt('Smrt', 'Smrt', 'an optional tech label', 'an optional description')
@enduml
```

