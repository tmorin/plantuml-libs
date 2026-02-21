# Hostinger


```text
simpleicons/H/Hostinger
```

```text
include('simpleicons/H/Hostinger')
```



| Illustration | Hostinger |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Hostinger.png) | ![illustration for Hostinger](../../simpleicons/H/Hostinger.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HostingerXs>`
- `<$HostingerSm>`
- `<$HostingerMd>`
- `<$HostingerLg>`





## Hostinger

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Hostinger
include('simpleicons/H/Hostinger')

' renders the element
Hostinger('Hostinger', 'Hostinger', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hostinger
include('simpleicons/H/Hostinger')

' renders the element
Hostinger('Hostinger', 'Hostinger', 'an optional tech label', 'an optional description')
@enduml
```

