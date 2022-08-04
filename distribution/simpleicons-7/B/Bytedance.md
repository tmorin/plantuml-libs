# Bytedance


```text
simpleicons-7/B/Bytedance
```

```text
include('simpleicons-7/B/Bytedance')
```



| Illustration | Bytedance |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Bytedance.png) | ![illustration for Bytedance](../../simpleicons-7/B/Bytedance.Local.png) |




## Bytedance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Bytedance
include('simpleicons-7/B/Bytedance')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Bytedance
include('simpleicons-7/B/Bytedance')

' renders the element
Bytedance('Bytedance', 'Bytedance', 'an optional tech label', 'an optional description')
@enduml
```

