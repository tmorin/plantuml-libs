# Pivotaltracker


```text
simpleicons-5/P/Pivotaltracker
```

```text
include('simpleicons-5/P/Pivotaltracker')
```



| Illustration | Pivotaltracker |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Pivotaltracker.png) | ![illustration for Pivotaltracker](../../simpleicons-5/P/Pivotaltracker.Local.png) |




## Pivotaltracker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pivotaltracker
include('simpleicons-5/P/Pivotaltracker')

' renders the element
Pivotaltracker('Pivotaltracker', 'Pivotaltracker', 'an optional tech label')
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

' loads the Item which embeds the element Pivotaltracker
include('simpleicons-5/P/Pivotaltracker')

' renders the element
Pivotaltracker('Pivotaltracker', 'Pivotaltracker', 'an optional tech label')
@enduml
```

