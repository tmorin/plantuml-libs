# Mihoyo


```text
simpleicons-14/M/Mihoyo
```

```text
include('simpleicons-14/M/Mihoyo')
```



| Illustration | Mihoyo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mihoyo.png) | ![illustration for Mihoyo](../../simpleicons-14/M/Mihoyo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MihoyoXs>`
- `<$MihoyoSm>`
- `<$MihoyoMd>`
- `<$MihoyoLg>`





## Mihoyo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mihoyo
include('simpleicons-14/M/Mihoyo')

' renders the element
Mihoyo('Mihoyo', 'Mihoyo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mihoyo
include('simpleicons-14/M/Mihoyo')

' renders the element
Mihoyo('Mihoyo', 'Mihoyo', 'an optional tech label', 'an optional description')
@enduml
```

