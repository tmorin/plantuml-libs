# Abbott


```text
simpleicons-5/A/Abbott
```

```text
include('simpleicons-5/A/Abbott')
```



| Illustration | Abbott |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Abbott.png) | ![illustration for Abbott](../../simpleicons-5/A/Abbott.Local.png) |




## Abbott

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Abbott
include('simpleicons-5/A/Abbott')

' renders the element
Abbott('Abbott', 'Abbott', 'an optional tech label')
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

' loads the Item which embeds the element Abbott
include('simpleicons-5/A/Abbott')

' renders the element
Abbott('Abbott', 'Abbott', 'an optional tech label')
@enduml
```

