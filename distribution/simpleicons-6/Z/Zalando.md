# Zalando


```text
simpleicons-6/Z/Zalando
```

```text
include('simpleicons-6/Z/Zalando')
```



| Illustration | Zalando |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/Z/Zalando.png) | ![illustration for Zalando](../../simpleicons-6/Z/Zalando.Local.png) |




## Zalando

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Zalando
include('simpleicons-6/Z/Zalando')

' renders the element
Zalando('Zalando', 'Zalando', 'an optional tech label')
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

' loads the Item which embeds the element Zalando
include('simpleicons-6/Z/Zalando')

' renders the element
Zalando('Zalando', 'Zalando', 'an optional tech label')
@enduml
```

