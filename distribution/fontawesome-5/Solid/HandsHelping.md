# HandsHelping


```text
fontawesome-5/Solid/HandsHelping
```

```text
include('fontawesome-5/Solid/HandsHelping')
```



| Illustration | HandsHelping |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/HandsHelping.png) | ![illustration for HandsHelping](../../fontawesome-5/Solid/HandsHelping.Local.png) |




## HandsHelping

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HandsHelping
include('fontawesome-5/Solid/HandsHelping')

' renders the element
HandsHelping('HandsHelping', 'Hands Helping', 'an optional tech label')
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

' loads the Item which embeds the element HandsHelping
include('fontawesome-5/Solid/HandsHelping')

' renders the element
HandsHelping('HandsHelping', 'Hands Helping', 'an optional tech label')
@enduml
```

