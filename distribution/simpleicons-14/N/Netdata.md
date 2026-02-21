# Netdata


```text
simpleicons-14/N/Netdata
```

```text
include('simpleicons-14/N/Netdata')
```



| Illustration | Netdata |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Netdata.png) | ![illustration for Netdata](../../simpleicons-14/N/Netdata.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Netdata
include('simpleicons-14/N/Netdata')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Netdata
include('simpleicons-14/N/Netdata')

' renders the element
Netdata('Netdata', 'Netdata', 'an optional tech label', 'an optional description')
@enduml
```

