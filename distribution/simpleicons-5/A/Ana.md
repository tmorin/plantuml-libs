# Ana


```text
simpleicons-5/A/Ana
```

```text
include('simpleicons-5/A/Ana')
```



| Illustration | Ana |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Ana.png) | ![illustration for Ana](../../simpleicons-5/A/Ana.Local.png) |




## Ana

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Ana
include('simpleicons-5/A/Ana')

' renders the element
Ana('Ana', 'Ana', 'an optional tech label')
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

' loads the Item which embeds the element Ana
include('simpleicons-5/A/Ana')

' renders the element
Ana('Ana', 'Ana', 'an optional tech label')
@enduml
```

