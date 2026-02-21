# Wazirx


```text
simpleicons-14/W/Wazirx
```

```text
include('simpleicons-14/W/Wazirx')
```



| Illustration | Wazirx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Wazirx.png) | ![illustration for Wazirx](../../simpleicons-14/W/Wazirx.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WazirxXs>`
- `<$WazirxSm>`
- `<$WazirxMd>`
- `<$WazirxLg>`





## Wazirx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Wazirx
include('simpleicons-14/W/Wazirx')

' renders the element
Wazirx('Wazirx', 'Wazirx', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wazirx
include('simpleicons-14/W/Wazirx')

' renders the element
Wazirx('Wazirx', 'Wazirx', 'an optional tech label', 'an optional description')
@enduml
```

