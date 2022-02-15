# Target


```text
simpleicons-6/T/Target
```

```text
include('simpleicons-6/T/Target')
```



| Illustration | Target |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Target.png) | ![illustration for Target](../../simpleicons-6/T/Target.Local.png) |




## Target

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Target
include('simpleicons-6/T/Target')

' renders the element
Target('Target', 'Target', 'an optional tech label')
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

' loads the Item which embeds the element Target
include('simpleicons-6/T/Target')

' renders the element
Target('Target', 'Target', 'an optional tech label')
@enduml
```

