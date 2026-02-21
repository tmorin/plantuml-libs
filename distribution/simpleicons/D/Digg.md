# Digg


```text
simpleicons/D/Digg
```

```text
include('simpleicons/D/Digg')
```



| Illustration | Digg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Digg.png) | ![illustration for Digg](../../simpleicons/D/Digg.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DiggXs>`
- `<$DiggSm>`
- `<$DiggMd>`
- `<$DiggLg>`





## Digg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Digg
include('simpleicons/D/Digg')

' renders the element
Digg('Digg', 'Digg', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Digg
include('simpleicons/D/Digg')

' renders the element
Digg('Digg', 'Digg', 'an optional tech label', 'an optional description')
@enduml
```

