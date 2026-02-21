# Distrokid


```text
simpleicons-14/D/Distrokid
```

```text
include('simpleicons-14/D/Distrokid')
```



| Illustration | Distrokid |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Distrokid.png) | ![illustration for Distrokid](../../simpleicons-14/D/Distrokid.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DistrokidXs>`
- `<$DistrokidSm>`
- `<$DistrokidMd>`
- `<$DistrokidLg>`





## Distrokid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Distrokid
include('simpleicons-14/D/Distrokid')

' renders the element
Distrokid('Distrokid', 'Distrokid', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Distrokid
include('simpleicons-14/D/Distrokid')

' renders the element
Distrokid('Distrokid', 'Distrokid', 'an optional tech label', 'an optional description')
@enduml
```

