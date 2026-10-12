# Zx


```text
simpleicons/Z/Zx
```

```text
include('simpleicons/Z/Zx')
```



| Illustration | Zx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Z/Zx.png) | ![illustration for Zx](../../simpleicons/Z/Zx.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZxXs>`
- `<$ZxSm>`
- `<$ZxMd>`
- `<$ZxLg>`





## Zx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Zx
include('simpleicons/Z/Zx')

' renders the element
Zx('Zx', 'Zx', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zx
include('simpleicons/Z/Zx')

' renders the element
Zx('Zx', 'Zx', 'an optional tech label', 'an optional description')
@enduml
```

