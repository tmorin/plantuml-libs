# Baidu


```text
simpleicons-5/B/Baidu
```

```text
include('simpleicons-5/B/Baidu')
```



| Illustration | Baidu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Baidu.png) | ![illustration for Baidu](../../simpleicons-5/B/Baidu.Local.png) |




## Baidu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Baidu
include('simpleicons-5/B/Baidu')

' renders the element
Baidu('Baidu', 'Baidu', 'an optional tech label')
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

' loads the Item which embeds the element Baidu
include('simpleicons-5/B/Baidu')

' renders the element
Baidu('Baidu', 'Baidu', 'an optional tech label')
@enduml
```

