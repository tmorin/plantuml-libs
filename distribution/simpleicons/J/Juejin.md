# Juejin


```text
simpleicons/J/Juejin
```

```text
include('simpleicons/J/Juejin')
```



| Illustration | Juejin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/J/Juejin.png) | ![illustration for Juejin](../../simpleicons/J/Juejin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JuejinXs>`
- `<$JuejinSm>`
- `<$JuejinMd>`
- `<$JuejinLg>`





## Juejin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Juejin
include('simpleicons/J/Juejin')

' renders the element
Juejin('Juejin', 'Juejin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Juejin
include('simpleicons/J/Juejin')

' renders the element
Juejin('Juejin', 'Juejin', 'an optional tech label', 'an optional description')
@enduml
```

