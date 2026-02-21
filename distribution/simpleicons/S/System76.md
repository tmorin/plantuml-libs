# System76


```text
simpleicons/S/System76
```

```text
include('simpleicons/S/System76')
```



| Illustration | System76 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/System76.png) | ![illustration for System76](../../simpleicons/S/System76.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$System76Xs>`
- `<$System76Sm>`
- `<$System76Md>`
- `<$System76Lg>`





## System76

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element System76
include('simpleicons/S/System76')

' renders the element
System76('System76', 'System76', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element System76
include('simpleicons/S/System76')

' renders the element
System76('System76', 'System76', 'an optional tech label', 'an optional description')
@enduml
```

