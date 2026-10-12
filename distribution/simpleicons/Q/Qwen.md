# Qwen


```text
simpleicons/Q/Qwen
```

```text
include('simpleicons/Q/Qwen')
```



| Illustration | Qwen |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Q/Qwen.png) | ![illustration for Qwen](../../simpleicons/Q/Qwen.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QwenXs>`
- `<$QwenSm>`
- `<$QwenMd>`
- `<$QwenLg>`





## Qwen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Qwen
include('simpleicons/Q/Qwen')

' renders the element
Qwen('Qwen', 'Qwen', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Qwen
include('simpleicons/Q/Qwen')

' renders the element
Qwen('Qwen', 'Qwen', 'an optional tech label', 'an optional description')
@enduml
```

