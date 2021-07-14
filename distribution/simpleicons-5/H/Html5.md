# Html5


```text
simpleicons-5/H/Html5
```

```text
include('simpleicons-5/H/Html5')
```



| Illustration | Html5 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Html5.png) | ![illustration for Html5](../../simpleicons-5/H/Html5.Local.png) |




## Html5

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Html5
include('simpleicons-5/H/Html5')

' renders the element
Html5('Html5', 'Html5', 'an optional tech label')
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

' loads the Item which embeds the element Html5
include('simpleicons-5/H/Html5')

' renders the element
Html5('Html5', 'Html5', 'an optional tech label')
@enduml
```

