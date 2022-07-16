# Abbott


```text
simpleicons-7/A/Abbott
```

```text
include('simpleicons-7/A/Abbott')
```



| Illustration | Abbott |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Abbott.png) | ![illustration for Abbott](../../simpleicons-7/A/Abbott.Local.png) |




## Abbott

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Abbott
include('simpleicons-7/A/Abbott')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Abbott
include('simpleicons-7/A/Abbott')

' renders the element
Abbott('Abbott', 'Abbott', 'an optional tech label')
@enduml
```

