# Toptal


```text
simpleicons-14/T/Toptal
```

```text
include('simpleicons-14/T/Toptal')
```



| Illustration | Toptal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Toptal.png) | ![illustration for Toptal](../../simpleicons-14/T/Toptal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ToptalXs>`
- `<$ToptalSm>`
- `<$ToptalMd>`
- `<$ToptalLg>`





## Toptal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Toptal
include('simpleicons-14/T/Toptal')

' renders the element
Toptal('Toptal', 'Toptal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Toptal
include('simpleicons-14/T/Toptal')

' renders the element
Toptal('Toptal', 'Toptal', 'an optional tech label', 'an optional description')
@enduml
```

