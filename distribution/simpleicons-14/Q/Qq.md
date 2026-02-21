# Qq


```text
simpleicons-14/Q/Qq
```

```text
include('simpleicons-14/Q/Qq')
```



| Illustration | Qq |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Q/Qq.png) | ![illustration for Qq](../../simpleicons-14/Q/Qq.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QqXs>`
- `<$QqSm>`
- `<$QqMd>`
- `<$QqLg>`





## Qq

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Qq
include('simpleicons-14/Q/Qq')

' renders the element
Qq('Qq', 'Qq', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Qq
include('simpleicons-14/Q/Qq')

' renders the element
Qq('Qq', 'Qq', 'an optional tech label', 'an optional description')
@enduml
```

