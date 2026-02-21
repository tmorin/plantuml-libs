# Piaggiogroup


```text
simpleicons-14/P/Piaggiogroup
```

```text
include('simpleicons-14/P/Piaggiogroup')
```



| Illustration | Piaggiogroup |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Piaggiogroup.png) | ![illustration for Piaggiogroup](../../simpleicons-14/P/Piaggiogroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PiaggiogroupXs>`
- `<$PiaggiogroupSm>`
- `<$PiaggiogroupMd>`
- `<$PiaggiogroupLg>`





## Piaggiogroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Piaggiogroup
include('simpleicons-14/P/Piaggiogroup')

' renders the element
Piaggiogroup('Piaggiogroup', 'Piaggiogroup', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Piaggiogroup
include('simpleicons-14/P/Piaggiogroup')

' renders the element
Piaggiogroup('Piaggiogroup', 'Piaggiogroup', 'an optional tech label', 'an optional description')
@enduml
```

