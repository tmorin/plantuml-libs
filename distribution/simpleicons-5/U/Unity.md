# Unity


```text
simpleicons-5/U/Unity
```

```text
include('simpleicons-5/U/Unity')
```



| Illustration | Unity |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/U/Unity.png) | ![illustration for Unity](../../simpleicons-5/U/Unity.Local.png) |




## Unity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Unity
include('simpleicons-5/U/Unity')

' renders the element
Unity('Unity', 'Unity', 'an optional tech label')
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

' loads the Item which embeds the element Unity
include('simpleicons-5/U/Unity')

' renders the element
Unity('Unity', 'Unity', 'an optional tech label')
@enduml
```

