# Smrt


```text
simpleicons-8/S/Smrt
```

```text
include('simpleicons-8/S/Smrt')
```



| Illustration | Smrt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Smrt.png) | ![illustration for Smrt](../../simpleicons-8/S/Smrt.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Smrt
include('simpleicons-8/S/Smrt')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Smrt
include('simpleicons-8/S/Smrt')

' renders the element
Smrt('Smrt', 'Smrt', 'an optional tech label', 'an optional description')
@enduml
```

