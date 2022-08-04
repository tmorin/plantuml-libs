# TrashCan


```text
fontawesome-6/Solid/TrashCan
```

```text
include('fontawesome-6/Solid/TrashCan')
```



| Illustration | TrashCan |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/TrashCan.png) | ![illustration for TrashCan](../../fontawesome-6/Solid/TrashCan.Local.png) |




## TrashCan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TrashCan
include('fontawesome-6/Solid/TrashCan')

' renders the element
TrashCan('TrashCan', 'Trash Can', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TrashCan
include('fontawesome-6/Solid/TrashCan')

' renders the element
TrashCan('TrashCan', 'Trash Can', 'an optional tech label', 'an optional description')
@enduml
```

