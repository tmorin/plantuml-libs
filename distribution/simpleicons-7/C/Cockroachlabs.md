# Cockroachlabs


```text
simpleicons-7/C/Cockroachlabs
```

```text
include('simpleicons-7/C/Cockroachlabs')
```



| Illustration | Cockroachlabs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Cockroachlabs.png) | ![illustration for Cockroachlabs](../../simpleicons-7/C/Cockroachlabs.Local.png) |




## Cockroachlabs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Cockroachlabs
include('simpleicons-7/C/Cockroachlabs')

' renders the element
Cockroachlabs('Cockroachlabs', 'Cockroachlabs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cockroachlabs
include('simpleicons-7/C/Cockroachlabs')

' renders the element
Cockroachlabs('Cockroachlabs', 'Cockroachlabs', 'an optional tech label', 'an optional description')
@enduml
```

