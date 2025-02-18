# Dm


```text
simpleicons-14/D/Dm
```

```text
include('simpleicons-14/D/Dm')
```



| Illustration | Dm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Dm.png) | ![illustration for Dm](../../simpleicons-14/D/Dm.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dm
include('simpleicons-14/D/Dm')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dm
include('simpleicons-14/D/Dm')

' renders the element
Dm('Dm', 'Dm', 'an optional tech label', 'an optional description')
@enduml
```

