# Wise


```text
simpleicons-7/W/Wise
```

```text
include('simpleicons-7/W/Wise')
```



| Illustration | Wise |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/W/Wise.png) | ![illustration for Wise](../../simpleicons-7/W/Wise.Local.png) |




## Wise

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Wise
include('simpleicons-7/W/Wise')

' renders the element
Wise('Wise', 'Wise', 'an optional tech label')
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

' loads the Item which embeds the element Wise
include('simpleicons-7/W/Wise')

' renders the element
Wise('Wise', 'Wise', 'an optional tech label')
@enduml
```

