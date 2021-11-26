# TrashRestoreAlt


```text
fontawesome-5/Solid/TrashRestoreAlt
```

```text
include('fontawesome-5/Solid/TrashRestoreAlt')
```



| Illustration | TrashRestoreAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/TrashRestoreAlt.png) | ![illustration for TrashRestoreAlt](../../fontawesome-5/Solid/TrashRestoreAlt.Local.png) |




## TrashRestoreAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element TrashRestoreAlt
include('fontawesome-5/Solid/TrashRestoreAlt')

' renders the element
TrashRestoreAlt('TrashRestoreAlt', 'Trash Restore Alt', 'an optional tech label')
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

' loads the Item which embeds the element TrashRestoreAlt
include('fontawesome-5/Solid/TrashRestoreAlt')

' renders the element
TrashRestoreAlt('TrashRestoreAlt', 'Trash Restore Alt', 'an optional tech label')
@enduml
```

