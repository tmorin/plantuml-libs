# Nim


```text
simpleicons-14/N/Nim
```

```text
include('simpleicons-14/N/Nim')
```



| Illustration | Nim |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Nim.png) | ![illustration for Nim](../../simpleicons-14/N/Nim.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NimXs>`
- `<$NimSm>`
- `<$NimMd>`
- `<$NimLg>`





## Nim

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nim
include('simpleicons-14/N/Nim')

' renders the element
Nim('Nim', 'Nim', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nim
include('simpleicons-14/N/Nim')

' renders the element
Nim('Nim', 'Nim', 'an optional tech label', 'an optional description')
@enduml
```

