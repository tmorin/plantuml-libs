# TrashAlt


```text
fontawesome-5/Solid/TrashAlt
```

```text
include('fontawesome-5/Solid/TrashAlt')
```



| Illustration | TrashAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/TrashAlt.png) | ![illustration for TrashAlt](../../fontawesome-5/Solid/TrashAlt.Local.png) |




## TrashAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element TrashAlt
include('fontawesome-5/Solid/TrashAlt')

' renders the element
TrashAlt('TrashAlt', 'Trash Alt', 'an optional tech label')
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

' loads the Item which embeds the element TrashAlt
include('fontawesome-5/Solid/TrashAlt')

' renders the element
TrashAlt('TrashAlt', 'Trash Alt', 'an optional tech label')
@enduml
```

