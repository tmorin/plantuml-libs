# TrashRestore


```text
fontawesome-5/Solid/TrashRestore
```

```text
include('fontawesome-5/Solid/TrashRestore')
```



| Illustration | TrashRestore |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/TrashRestore.png) | ![illustration for TrashRestore](../../fontawesome-5/Solid/TrashRestore.Local.png) |




## TrashRestore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element TrashRestore
include('fontawesome-5/Solid/TrashRestore')

' renders the element
TrashRestore('TrashRestore', 'Trash Restore', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element TrashRestore
include('fontawesome-5/Solid/TrashRestore')

' renders the element
TrashRestore('TrashRestore', 'Trash Restore', 'an optional tech label')
@enduml
```

