# Swiggy


```text
simpleicons-5/S/Swiggy
```

```text
include('simpleicons-5/S/Swiggy')
```



| Illustration | Swiggy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Swiggy.png) | ![illustration for Swiggy](../../simpleicons-5/S/Swiggy.Local.png) |




## Swiggy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Swiggy
include('simpleicons-5/S/Swiggy')

' renders the element
Swiggy('Swiggy', 'Swiggy', 'an optional tech label')
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

' loads the Item which embeds the element Swiggy
include('simpleicons-5/S/Swiggy')

' renders the element
Swiggy('Swiggy', 'Swiggy', 'an optional tech label')
@enduml
```

