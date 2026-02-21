# Netdata


```text
simpleicons/N/Netdata
```

```text
include('simpleicons/N/Netdata')
```



| Illustration | Netdata |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Netdata.png) | ![illustration for Netdata](../../simpleicons/N/Netdata.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NetdataXs>`
- `<$NetdataSm>`
- `<$NetdataMd>`
- `<$NetdataLg>`





## Netdata

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Netdata
include('simpleicons/N/Netdata')

' renders the element
Netdata('Netdata', 'Netdata', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Netdata
include('simpleicons/N/Netdata')

' renders the element
Netdata('Netdata', 'Netdata', 'an optional tech label', 'an optional description')
@enduml
```

