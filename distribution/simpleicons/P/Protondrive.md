# Protondrive


```text
simpleicons/P/Protondrive
```

```text
include('simpleicons/P/Protondrive')
```



| Illustration | Protondrive |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Protondrive.png) | ![illustration for Protondrive](../../simpleicons/P/Protondrive.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ProtondriveXs>`
- `<$ProtondriveSm>`
- `<$ProtondriveMd>`
- `<$ProtondriveLg>`





## Protondrive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Protondrive
include('simpleicons/P/Protondrive')

' renders the element
Protondrive('Protondrive', 'Protondrive', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Protondrive
include('simpleicons/P/Protondrive')

' renders the element
Protondrive('Protondrive', 'Protondrive', 'an optional tech label', 'an optional description')
@enduml
```

