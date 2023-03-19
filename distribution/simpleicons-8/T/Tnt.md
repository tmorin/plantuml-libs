# Tnt


```text
simpleicons-8/T/Tnt
```

```text
include('simpleicons-8/T/Tnt')
```



| Illustration | Tnt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Tnt.png) | ![illustration for Tnt](../../simpleicons-8/T/Tnt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TntXs>`
- `<$TntSm>`
- `<$TntMd>`
- `<$TntLg>`





## Tnt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Tnt
include('simpleicons-8/T/Tnt')

' renders the element
Tnt('Tnt', 'Tnt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tnt
include('simpleicons-8/T/Tnt')

' renders the element
Tnt('Tnt', 'Tnt', 'an optional tech label', 'an optional description')
@enduml
```

