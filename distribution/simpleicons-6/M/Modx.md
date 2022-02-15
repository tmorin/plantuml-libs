# Modx


```text
simpleicons-6/M/Modx
```

```text
include('simpleicons-6/M/Modx')
```



| Illustration | Modx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Modx.png) | ![illustration for Modx](../../simpleicons-6/M/Modx.Local.png) |




## Modx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Modx
include('simpleicons-6/M/Modx')

' renders the element
Modx('Modx', 'Modx', 'an optional tech label')
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

' loads the Item which embeds the element Modx
include('simpleicons-6/M/Modx')

' renders the element
Modx('Modx', 'Modx', 'an optional tech label')
@enduml
```

