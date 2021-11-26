# Gitee


```text
simpleicons-5/G/Gitee
```

```text
include('simpleicons-5/G/Gitee')
```



| Illustration | Gitee |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Gitee.png) | ![illustration for Gitee](../../simpleicons-5/G/Gitee.Local.png) |




## Gitee

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gitee
include('simpleicons-5/G/Gitee')

' renders the element
Gitee('Gitee', 'Gitee', 'an optional tech label')
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

' loads the Item which embeds the element Gitee
include('simpleicons-5/G/Gitee')

' renders the element
Gitee('Gitee', 'Gitee', 'an optional tech label')
@enduml
```

