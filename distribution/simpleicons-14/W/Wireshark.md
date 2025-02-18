# Wireshark


```text
simpleicons-14/W/Wireshark
```

```text
include('simpleicons-14/W/Wireshark')
```



| Illustration | Wireshark |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Wireshark.png) | ![illustration for Wireshark](../../simpleicons-14/W/Wireshark.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WiresharkXs>`
- `<$WiresharkSm>`
- `<$WiresharkMd>`
- `<$WiresharkLg>`





## Wireshark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Wireshark
include('simpleicons-14/W/Wireshark')

' renders the element
Wireshark('Wireshark', 'Wireshark', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wireshark
include('simpleicons-14/W/Wireshark')

' renders the element
Wireshark('Wireshark', 'Wireshark', 'an optional tech label', 'an optional description')
@enduml
```

