# Odin


```text
simpleicons-14/O/Odin
```

```text
include('simpleicons-14/O/Odin')
```



| Illustration | Odin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Odin.png) | ![illustration for Odin](../../simpleicons-14/O/Odin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OdinXs>`
- `<$OdinSm>`
- `<$OdinMd>`
- `<$OdinLg>`





## Odin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Odin
include('simpleicons-14/O/Odin')

' renders the element
Odin('Odin', 'Odin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Odin
include('simpleicons-14/O/Odin')

' renders the element
Odin('Odin', 'Odin', 'an optional tech label', 'an optional description')
@enduml
```

