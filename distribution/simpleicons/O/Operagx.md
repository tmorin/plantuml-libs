# Operagx


```text
simpleicons/O/Operagx
```

```text
include('simpleicons/O/Operagx')
```



| Illustration | Operagx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Operagx.png) | ![illustration for Operagx](../../simpleicons/O/Operagx.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OperagxXs>`
- `<$OperagxSm>`
- `<$OperagxMd>`
- `<$OperagxLg>`





## Operagx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Operagx
include('simpleicons/O/Operagx')

' renders the element
Operagx('Operagx', 'Operagx', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Operagx
include('simpleicons/O/Operagx')

' renders the element
Operagx('Operagx', 'Operagx', 'an optional tech label', 'an optional description')
@enduml
```

