# Modx


```text
simpleicons-14/M/Modx
```

```text
include('simpleicons-14/M/Modx')
```



| Illustration | Modx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Modx.png) | ![illustration for Modx](../../simpleicons-14/M/Modx.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ModxXs>`
- `<$ModxSm>`
- `<$ModxMd>`
- `<$ModxLg>`





## Modx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Modx
include('simpleicons-14/M/Modx')

' renders the element
Modx('Modx', 'Modx', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Modx
include('simpleicons-14/M/Modx')

' renders the element
Modx('Modx', 'Modx', 'an optional tech label', 'an optional description')
@enduml
```

