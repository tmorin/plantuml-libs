# Wpengine


```text
simpleicons-5/W/Wpengine
```

```text
include('simpleicons-5/W/Wpengine')
```



| Illustration | Wpengine |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/W/Wpengine.png) | ![illustration for Wpengine](../../simpleicons-5/W/Wpengine.Local.png) |




## Wpengine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Wpengine
include('simpleicons-5/W/Wpengine')

' renders the element
Wpengine('Wpengine', 'Wpengine', 'an optional tech label')
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

' loads the Item which embeds the element Wpengine
include('simpleicons-5/W/Wpengine')

' renders the element
Wpengine('Wpengine', 'Wpengine', 'an optional tech label')
@enduml
```

