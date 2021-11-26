# SadTear


```text
fontawesome-5/Regular/SadTear
```

```text
include('fontawesome-5/Regular/SadTear')
```



| Illustration | SadTear |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/SadTear.png) | ![illustration for SadTear](../../fontawesome-5/Regular/SadTear.Local.png) |




## SadTear

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SadTear
include('fontawesome-5/Regular/SadTear')

' renders the element
SadTear('SadTear', 'Sad Tear', 'an optional tech label')
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

' loads the Item which embeds the element SadTear
include('fontawesome-5/Regular/SadTear')

' renders the element
SadTear('SadTear', 'Sad Tear', 'an optional tech label')
@enduml
```

