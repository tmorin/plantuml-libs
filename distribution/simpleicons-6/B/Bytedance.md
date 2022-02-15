# Bytedance


```text
simpleicons-6/B/Bytedance
```

```text
include('simpleicons-6/B/Bytedance')
```



| Illustration | Bytedance |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Bytedance.png) | ![illustration for Bytedance](../../simpleicons-6/B/Bytedance.Local.png) |




## Bytedance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Bytedance
include('simpleicons-6/B/Bytedance')

' renders the element
Bytedance('Bytedance', 'Bytedance', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Bytedance
include('simpleicons-6/B/Bytedance')

' renders the element
Bytedance('Bytedance', 'Bytedance', 'an optional tech label')
@enduml
```

