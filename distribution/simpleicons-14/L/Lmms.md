# Lmms


```text
simpleicons-14/L/Lmms
```

```text
include('simpleicons-14/L/Lmms')
```



| Illustration | Lmms |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Lmms.png) | ![illustration for Lmms](../../simpleicons-14/L/Lmms.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LmmsXs>`
- `<$LmmsSm>`
- `<$LmmsMd>`
- `<$LmmsLg>`





## Lmms

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Lmms
include('simpleicons-14/L/Lmms')

' renders the element
Lmms('Lmms', 'Lmms', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lmms
include('simpleicons-14/L/Lmms')

' renders the element
Lmms('Lmms', 'Lmms', 'an optional tech label', 'an optional description')
@enduml
```

