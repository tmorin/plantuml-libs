# Ansys


```text
simpleicons-5/A/Ansys
```

```text
include('simpleicons-5/A/Ansys')
```



| Illustration | Ansys |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Ansys.png) | ![illustration for Ansys](../../simpleicons-5/A/Ansys.Local.png) |




## Ansys

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Ansys
include('simpleicons-5/A/Ansys')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Ansys
include('simpleicons-5/A/Ansys')

' renders the element
Ansys('Ansys', 'Ansys', 'an optional tech label')
@enduml
```

