# Ansys


```text
simpleicons-7/A/Ansys
```

```text
include('simpleicons-7/A/Ansys')
```



| Illustration | Ansys |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Ansys.png) | ![illustration for Ansys](../../simpleicons-7/A/Ansys.Local.png) |




## Ansys

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Ansys
include('simpleicons-7/A/Ansys')

' renders the element
Ansys('Ansys', 'Ansys', 'an optional tech label')
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

' loads the Item which embeds the element Ansys
include('simpleicons-7/A/Ansys')

' renders the element
Ansys('Ansys', 'Ansys', 'an optional tech label')
@enduml
```

