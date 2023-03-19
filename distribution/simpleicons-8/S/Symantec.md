# Symantec


```text
simpleicons-8/S/Symantec
```

```text
include('simpleicons-8/S/Symantec')
```



| Illustration | Symantec |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Symantec.png) | ![illustration for Symantec](../../simpleicons-8/S/Symantec.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SymantecXs>`
- `<$SymantecSm>`
- `<$SymantecMd>`
- `<$SymantecLg>`





## Symantec

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Symantec
include('simpleicons-8/S/Symantec')

' renders the element
Symantec('Symantec', 'Symantec', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Symantec
include('simpleicons-8/S/Symantec')

' renders the element
Symantec('Symantec', 'Symantec', 'an optional tech label', 'an optional description')
@enduml
```

