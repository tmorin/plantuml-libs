# Oxygen


```text
simpleicons-8/O/Oxygen
```

```text
include('simpleicons-8/O/Oxygen')
```



| Illustration | Oxygen |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/O/Oxygen.png) | ![illustration for Oxygen](../../simpleicons-8/O/Oxygen.Local.png) |




## Oxygen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Oxygen
include('simpleicons-8/O/Oxygen')

' renders the element
Oxygen('Oxygen', 'Oxygen', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Oxygen
include('simpleicons-8/O/Oxygen')

' renders the element
Oxygen('Oxygen', 'Oxygen', 'an optional tech label', 'an optional description')
@enduml
```

