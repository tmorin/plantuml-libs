# Tplink


```text
simpleicons-14/T/Tplink
```

```text
include('simpleicons-14/T/Tplink')
```



| Illustration | Tplink |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Tplink.png) | ![illustration for Tplink](../../simpleicons-14/T/Tplink.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TplinkXs>`
- `<$TplinkSm>`
- `<$TplinkMd>`
- `<$TplinkLg>`





## Tplink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tplink
include('simpleicons-14/T/Tplink')

' renders the element
Tplink('Tplink', 'Tplink', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tplink
include('simpleicons-14/T/Tplink')

' renders the element
Tplink('Tplink', 'Tplink', 'an optional tech label', 'an optional description')
@enduml
```

