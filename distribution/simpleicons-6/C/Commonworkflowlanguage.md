# Commonworkflowlanguage


```text
simpleicons-6/C/Commonworkflowlanguage
```

```text
include('simpleicons-6/C/Commonworkflowlanguage')
```



| Illustration | Commonworkflowlanguage |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Commonworkflowlanguage.png) | ![illustration for Commonworkflowlanguage](../../simpleicons-6/C/Commonworkflowlanguage.Local.png) |




## Commonworkflowlanguage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Commonworkflowlanguage
include('simpleicons-6/C/Commonworkflowlanguage')

' renders the element
Commonworkflowlanguage('Commonworkflowlanguage', 'Commonworkflowlanguage', 'an optional tech label')
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

' loads the Item which embeds the element Commonworkflowlanguage
include('simpleicons-6/C/Commonworkflowlanguage')

' renders the element
Commonworkflowlanguage('Commonworkflowlanguage', 'Commonworkflowlanguage', 'an optional tech label')
@enduml
```

