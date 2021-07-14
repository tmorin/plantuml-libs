# Phpstorm


```text
simpleicons-5/P/Phpstorm
```

```text
include('simpleicons-5/P/Phpstorm')
```



| Illustration | Phpstorm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Phpstorm.png) | ![illustration for Phpstorm](../../simpleicons-5/P/Phpstorm.Local.png) |




## Phpstorm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Phpstorm
include('simpleicons-5/P/Phpstorm')

' renders the element
Phpstorm('Phpstorm', 'Phpstorm', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Phpstorm
include('simpleicons-5/P/Phpstorm')

' renders the element
Phpstorm('Phpstorm', 'Phpstorm', 'an optional tech label')
@enduml
```

