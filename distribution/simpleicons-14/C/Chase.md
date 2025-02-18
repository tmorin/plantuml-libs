# Chase


```text
simpleicons-14/C/Chase
```

```text
include('simpleicons-14/C/Chase')
```



| Illustration | Chase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Chase.png) | ![illustration for Chase](../../simpleicons-14/C/Chase.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChaseXs>`
- `<$ChaseSm>`
- `<$ChaseMd>`
- `<$ChaseLg>`





## Chase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Chase
include('simpleicons-14/C/Chase')

' renders the element
Chase('Chase', 'Chase', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Chase
include('simpleicons-14/C/Chase')

' renders the element
Chase('Chase', 'Chase', 'an optional tech label', 'an optional description')
@enduml
```

