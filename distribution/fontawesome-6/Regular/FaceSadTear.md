# FaceSadTear


```text
fontawesome-6/Regular/FaceSadTear
```

```text
include('fontawesome-6/Regular/FaceSadTear')
```



| Illustration | FaceSadTear |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/FaceSadTear.png) | ![illustration for FaceSadTear](../../fontawesome-6/Regular/FaceSadTear.Local.png) |




## FaceSadTear

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FaceSadTear
include('fontawesome-6/Regular/FaceSadTear')

' renders the element
FaceSadTear('FaceSadTear', 'Face Sad Tear', 'an optional tech label')
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

' loads the Item which embeds the element FaceSadTear
include('fontawesome-6/Regular/FaceSadTear')

' renders the element
FaceSadTear('FaceSadTear', 'Face Sad Tear', 'an optional tech label')
@enduml
```

