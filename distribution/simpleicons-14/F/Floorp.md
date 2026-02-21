# Floorp


```text
simpleicons-14/F/Floorp
```

```text
include('simpleicons-14/F/Floorp')
```



| Illustration | Floorp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Floorp.png) | ![illustration for Floorp](../../simpleicons-14/F/Floorp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FloorpXs>`
- `<$FloorpSm>`
- `<$FloorpMd>`
- `<$FloorpLg>`





## Floorp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Floorp
include('simpleicons-14/F/Floorp')

' renders the element
Floorp('Floorp', 'Floorp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Floorp
include('simpleicons-14/F/Floorp')

' renders the element
Floorp('Floorp', 'Floorp', 'an optional tech label', 'an optional description')
@enduml
```

