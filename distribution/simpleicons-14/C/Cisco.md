# Cisco


```text
simpleicons-14/C/Cisco
```

```text
include('simpleicons-14/C/Cisco')
```



| Illustration | Cisco |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Cisco.png) | ![illustration for Cisco](../../simpleicons-14/C/Cisco.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CiscoXs>`
- `<$CiscoSm>`
- `<$CiscoMd>`
- `<$CiscoLg>`





## Cisco

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cisco
include('simpleicons-14/C/Cisco')

' renders the element
Cisco('Cisco', 'Cisco', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cisco
include('simpleicons-14/C/Cisco')

' renders the element
Cisco('Cisco', 'Cisco', 'an optional tech label', 'an optional description')
@enduml
```

