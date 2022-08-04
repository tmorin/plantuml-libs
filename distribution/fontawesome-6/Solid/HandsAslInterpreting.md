# HandsAslInterpreting


```text
fontawesome-6/Solid/HandsAslInterpreting
```

```text
include('fontawesome-6/Solid/HandsAslInterpreting')
```



| Illustration | HandsAslInterpreting |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HandsAslInterpreting.png) | ![illustration for HandsAslInterpreting](../../fontawesome-6/Solid/HandsAslInterpreting.Local.png) |




## HandsAslInterpreting

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HandsAslInterpreting
include('fontawesome-6/Solid/HandsAslInterpreting')

' renders the element
HandsAslInterpreting('HandsAslInterpreting', 'Hands Asl Interpreting', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandsAslInterpreting
include('fontawesome-6/Solid/HandsAslInterpreting')

' renders the element
HandsAslInterpreting('HandsAslInterpreting', 'Hands Asl Interpreting', 'an optional tech label', 'an optional description')
@enduml
```

