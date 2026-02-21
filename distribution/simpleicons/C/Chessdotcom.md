# Chessdotcom


```text
simpleicons/C/Chessdotcom
```

```text
include('simpleicons/C/Chessdotcom')
```



| Illustration | Chessdotcom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Chessdotcom.png) | ![illustration for Chessdotcom](../../simpleicons/C/Chessdotcom.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChessdotcomXs>`
- `<$ChessdotcomSm>`
- `<$ChessdotcomMd>`
- `<$ChessdotcomLg>`





## Chessdotcom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Chessdotcom
include('simpleicons/C/Chessdotcom')

' renders the element
Chessdotcom('Chessdotcom', 'Chessdotcom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Chessdotcom
include('simpleicons/C/Chessdotcom')

' renders the element
Chessdotcom('Chessdotcom', 'Chessdotcom', 'an optional tech label', 'an optional description')
@enduml
```

