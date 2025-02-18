# Dell


```text
simpleicons-14/D/Dell
```

```text
include('simpleicons-14/D/Dell')
```



| Illustration | Dell |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Dell.png) | ![illustration for Dell](../../simpleicons-14/D/Dell.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DellXs>`
- `<$DellSm>`
- `<$DellMd>`
- `<$DellLg>`





## Dell

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dell
include('simpleicons-14/D/Dell')

' renders the element
Dell('Dell', 'Dell', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dell
include('simpleicons-14/D/Dell')

' renders the element
Dell('Dell', 'Dell', 'an optional tech label', 'an optional description')
@enduml
```

