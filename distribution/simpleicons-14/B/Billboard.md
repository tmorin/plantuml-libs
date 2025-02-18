# Billboard


```text
simpleicons-14/B/Billboard
```

```text
include('simpleicons-14/B/Billboard')
```



| Illustration | Billboard |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Billboard.png) | ![illustration for Billboard](../../simpleicons-14/B/Billboard.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BillboardXs>`
- `<$BillboardSm>`
- `<$BillboardMd>`
- `<$BillboardLg>`





## Billboard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Billboard
include('simpleicons-14/B/Billboard')

' renders the element
Billboard('Billboard', 'Billboard', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Billboard
include('simpleicons-14/B/Billboard')

' renders the element
Billboard('Billboard', 'Billboard', 'an optional tech label', 'an optional description')
@enduml
```

