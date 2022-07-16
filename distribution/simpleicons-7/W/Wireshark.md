# Wireshark


```text
simpleicons-7/W/Wireshark
```

```text
include('simpleicons-7/W/Wireshark')
```



| Illustration | Wireshark |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/W/Wireshark.png) | ![illustration for Wireshark](../../simpleicons-7/W/Wireshark.Local.png) |




## Wireshark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Wireshark
include('simpleicons-7/W/Wireshark')

' renders the element
Wireshark('Wireshark', 'Wireshark', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Wireshark
include('simpleicons-7/W/Wireshark')

' renders the element
Wireshark('Wireshark', 'Wireshark', 'an optional tech label')
@enduml
```

