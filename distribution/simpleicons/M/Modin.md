# Modin


```text
simpleicons/M/Modin
```

```text
include('simpleicons/M/Modin')
```



| Illustration | Modin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Modin.png) | ![illustration for Modin](../../simpleicons/M/Modin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ModinXs>`
- `<$ModinSm>`
- `<$ModinMd>`
- `<$ModinLg>`





## Modin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Modin
include('simpleicons/M/Modin')

' renders the element
Modin('Modin', 'Modin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Modin
include('simpleicons/M/Modin')

' renders the element
Modin('Modin', 'Modin', 'an optional tech label', 'an optional description')
@enduml
```

