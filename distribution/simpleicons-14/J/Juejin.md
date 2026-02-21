# Juejin


```text
simpleicons-14/J/Juejin
```

```text
include('simpleicons-14/J/Juejin')
```



| Illustration | Juejin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/J/Juejin.png) | ![illustration for Juejin](../../simpleicons-14/J/Juejin.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Juejin
include('simpleicons-14/J/Juejin')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Juejin
include('simpleicons-14/J/Juejin')

' renders the element
Juejin('Juejin', 'Juejin', 'an optional tech label', 'an optional description')
@enduml
```

