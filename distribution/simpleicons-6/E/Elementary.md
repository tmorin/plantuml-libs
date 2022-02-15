# Elementary


```text
simpleicons-6/E/Elementary
```

```text
include('simpleicons-6/E/Elementary')
```



| Illustration | Elementary |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/E/Elementary.png) | ![illustration for Elementary](../../simpleicons-6/E/Elementary.Local.png) |




## Elementary

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Elementary
include('simpleicons-6/E/Elementary')

' renders the element
Elementary('Elementary', 'Elementary', 'an optional tech label')
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

' loads the Item which embeds the element Elementary
include('simpleicons-6/E/Elementary')

' renders the element
Elementary('Elementary', 'Elementary', 'an optional tech label')
@enduml
```

