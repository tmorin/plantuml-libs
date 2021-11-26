# Unrealengine


```text
simpleicons-5/U/Unrealengine
```

```text
include('simpleicons-5/U/Unrealengine')
```



| Illustration | Unrealengine |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/U/Unrealengine.png) | ![illustration for Unrealengine](../../simpleicons-5/U/Unrealengine.Local.png) |




## Unrealengine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Unrealengine
include('simpleicons-5/U/Unrealengine')

' renders the element
Unrealengine('Unrealengine', 'Unrealengine', 'an optional tech label')
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

' loads the Item which embeds the element Unrealengine
include('simpleicons-5/U/Unrealengine')

' renders the element
Unrealengine('Unrealengine', 'Unrealengine', 'an optional tech label')
@enduml
```

