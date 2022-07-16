# Phpstorm


```text
simpleicons-7/P/Phpstorm
```

```text
include('simpleicons-7/P/Phpstorm')
```



| Illustration | Phpstorm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Phpstorm.png) | ![illustration for Phpstorm](../../simpleicons-7/P/Phpstorm.Local.png) |




## Phpstorm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Phpstorm
include('simpleicons-7/P/Phpstorm')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Phpstorm
include('simpleicons-7/P/Phpstorm')

' renders the element
Phpstorm('Phpstorm', 'Phpstorm', 'an optional tech label')
@enduml
```

