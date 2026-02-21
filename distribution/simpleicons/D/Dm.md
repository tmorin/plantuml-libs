# Dm


```text
simpleicons/D/Dm
```

```text
include('simpleicons/D/Dm')
```



| Illustration | Dm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Dm.png) | ![illustration for Dm](../../simpleicons/D/Dm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DmXs>`
- `<$DmSm>`
- `<$DmMd>`
- `<$DmLg>`





## Dm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Dm
include('simpleicons/D/Dm')

' renders the element
Dm('Dm', 'Dm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dm
include('simpleicons/D/Dm')

' renders the element
Dm('Dm', 'Dm', 'an optional tech label', 'an optional description')
@enduml
```

