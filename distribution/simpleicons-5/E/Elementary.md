# Elementary


```text
simpleicons-5/E/Elementary
```

```text
include('simpleicons-5/E/Elementary')
```



| Illustration | Elementary |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/E/Elementary.png) | ![illustration for Elementary](../../simpleicons-5/E/Elementary.Local.png) |




## Elementary

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Elementary
include('simpleicons-5/E/Elementary')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Elementary
include('simpleicons-5/E/Elementary')

' renders the element
Elementary('Elementary', 'Elementary', 'an optional tech label')
@enduml
```

