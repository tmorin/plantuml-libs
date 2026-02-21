# Broadcom


```text
simpleicons/B/Broadcom
```

```text
include('simpleicons/B/Broadcom')
```



| Illustration | Broadcom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Broadcom.png) | ![illustration for Broadcom](../../simpleicons/B/Broadcom.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BroadcomXs>`
- `<$BroadcomSm>`
- `<$BroadcomMd>`
- `<$BroadcomLg>`





## Broadcom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Broadcom
include('simpleicons/B/Broadcom')

' renders the element
Broadcom('Broadcom', 'Broadcom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Broadcom
include('simpleicons/B/Broadcom')

' renders the element
Broadcom('Broadcom', 'Broadcom', 'an optional tech label', 'an optional description')
@enduml
```

