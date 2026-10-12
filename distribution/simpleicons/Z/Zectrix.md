# Zectrix


```text
simpleicons/Z/Zectrix
```

```text
include('simpleicons/Z/Zectrix')
```



| Illustration | Zectrix |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Z/Zectrix.png) | ![illustration for Zectrix](../../simpleicons/Z/Zectrix.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZectrixXs>`
- `<$ZectrixSm>`
- `<$ZectrixMd>`
- `<$ZectrixLg>`





## Zectrix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Zectrix
include('simpleicons/Z/Zectrix')

' renders the element
Zectrix('Zectrix', 'Zectrix', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zectrix
include('simpleicons/Z/Zectrix')

' renders the element
Zectrix('Zectrix', 'Zectrix', 'an optional tech label', 'an optional description')
@enduml
```

