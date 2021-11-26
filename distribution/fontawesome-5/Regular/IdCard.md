# IdCard


```text
fontawesome-5/Regular/IdCard
```

```text
include('fontawesome-5/Regular/IdCard')
```



| Illustration | IdCard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/IdCard.png) | ![illustration for IdCard](../../fontawesome-5/Regular/IdCard.Local.png) |




## IdCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element IdCard
include('fontawesome-5/Regular/IdCard')

' renders the element
IdCard('IdCard', 'Id Card', 'an optional tech label')
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

' loads the Item which embeds the element IdCard
include('fontawesome-5/Regular/IdCard')

' renders the element
IdCard('IdCard', 'Id Card', 'an optional tech label')
@enduml
```

