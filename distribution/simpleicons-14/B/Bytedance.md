# Bytedance


```text
simpleicons-14/B/Bytedance
```

```text
include('simpleicons-14/B/Bytedance')
```



| Illustration | Bytedance |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Bytedance.png) | ![illustration for Bytedance](../../simpleicons-14/B/Bytedance.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BytedanceXs>`
- `<$BytedanceSm>`
- `<$BytedanceMd>`
- `<$BytedanceLg>`





## Bytedance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Bytedance
include('simpleicons-14/B/Bytedance')

' renders the element
Bytedance('Bytedance', 'Bytedance', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bytedance
include('simpleicons-14/B/Bytedance')

' renders the element
Bytedance('Bytedance', 'Bytedance', 'an optional tech label', 'an optional description')
@enduml
```

