# Gitee


```text
simpleicons-8/G/Gitee
```

```text
include('simpleicons-8/G/Gitee')
```



| Illustration | Gitee |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Gitee.png) | ![illustration for Gitee](../../simpleicons-8/G/Gitee.Local.png) |




## Gitee

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Gitee
include('simpleicons-8/G/Gitee')

' renders the element
Gitee('Gitee', 'Gitee', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Gitee
include('simpleicons-8/G/Gitee')

' renders the element
Gitee('Gitee', 'Gitee', 'an optional tech label', 'an optional description')
@enduml
```
