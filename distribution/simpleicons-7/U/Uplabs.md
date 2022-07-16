# Uplabs


```text
simpleicons-7/U/Uplabs
```

```text
include('simpleicons-7/U/Uplabs')
```



| Illustration | Uplabs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/U/Uplabs.png) | ![illustration for Uplabs](../../simpleicons-7/U/Uplabs.Local.png) |




## Uplabs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Uplabs
include('simpleicons-7/U/Uplabs')

' renders the element
Uplabs('Uplabs', 'Uplabs', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Uplabs
include('simpleicons-7/U/Uplabs')

' renders the element
Uplabs('Uplabs', 'Uplabs', 'an optional tech label')
@enduml
```

