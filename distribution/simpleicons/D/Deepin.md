# Deepin


```text
simpleicons/D/Deepin
```

```text
include('simpleicons/D/Deepin')
```



| Illustration | Deepin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Deepin.png) | ![illustration for Deepin](../../simpleicons/D/Deepin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DeepinXs>`
- `<$DeepinSm>`
- `<$DeepinMd>`
- `<$DeepinLg>`





## Deepin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Deepin
include('simpleicons/D/Deepin')

' renders the element
Deepin('Deepin', 'Deepin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Deepin
include('simpleicons/D/Deepin')

' renders the element
Deepin('Deepin', 'Deepin', 'an optional tech label', 'an optional description')
@enduml
```

