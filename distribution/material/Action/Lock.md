# Lock


```text
material/Action/Lock
```

```text
include('material/Action/Lock')
```



| Illustration | Lock |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Lock.png) | ![illustration for Lock](../../material/Action/Lock.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element Lock
include('material/Action/Lock')

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
include('material/bootstrap')

' loads the Item which embeds the element Lock
include('material/Action/Lock')

' renders the element
Lock('Lock', 'Lock', 'an optional tech label', 'an optional description')
@enduml
```

