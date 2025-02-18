# Iveco


```text
simpleicons-14/I/Iveco
```

```text
include('simpleicons-14/I/Iveco')
```



| Illustration | Iveco |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/Iveco.png) | ![illustration for Iveco](../../simpleicons-14/I/Iveco.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IvecoXs>`
- `<$IvecoSm>`
- `<$IvecoMd>`
- `<$IvecoLg>`





## Iveco

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Iveco
include('simpleicons-14/I/Iveco')

' renders the element
Iveco('Iveco', 'Iveco', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Iveco
include('simpleicons-14/I/Iveco')

' renders the element
Iveco('Iveco', 'Iveco', 'an optional tech label', 'an optional description')
@enduml
```

