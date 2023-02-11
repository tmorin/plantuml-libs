# Linkfire


```text
simpleicons-8/L/Linkfire
```

```text
include('simpleicons-8/L/Linkfire')
```



| Illustration | Linkfire |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/L/Linkfire.png) | ![illustration for Linkfire](../../simpleicons-8/L/Linkfire.Local.png) |




## Linkfire

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Linkfire
include('simpleicons-8/L/Linkfire')

' renders the element
Linkfire('Linkfire', 'Linkfire', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Linkfire
include('simpleicons-8/L/Linkfire')

' renders the element
Linkfire('Linkfire', 'Linkfire', 'an optional tech label', 'an optional description')
@enduml
```

