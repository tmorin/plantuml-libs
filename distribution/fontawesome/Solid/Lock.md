# Lock


```text
fontawesome/Solid/Lock
```

```text
include('fontawesome/Solid/Lock')
```



| Illustration | Lock |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Lock.png) | ![illustration for Lock](../../fontawesome/Solid/Lock.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LockXs>`
- `<$LockSm>`
- `<$LockMd>`
- `<$LockLg>`





## Lock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Lock
include('fontawesome/Solid/Lock')

' renders the element
Lock('Lock', 'Lock', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Lock
include('fontawesome/Solid/Lock')

' renders the element
Lock('Lock', 'Lock', 'an optional tech label', 'an optional description')
@enduml
```

