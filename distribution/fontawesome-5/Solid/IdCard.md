# IdCard


```text
fontawesome-5/Solid/IdCard
```

```text
include('fontawesome-5/Solid/IdCard')
```



| Illustration | IdCard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/IdCard.png) | ![illustration for IdCard](../../fontawesome-5/Solid/IdCard.Local.png) |




## IdCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element IdCard
include('fontawesome-5/Solid/IdCard')

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
include('fontawesome-5/Solid/IdCard')

' renders the element
IdCard('IdCard', 'Id Card', 'an optional tech label')
@enduml
```

