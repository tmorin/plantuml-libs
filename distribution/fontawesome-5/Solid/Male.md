# Male


```text
fontawesome-5/Solid/Male
```

```text
include('fontawesome-5/Solid/Male')
```



| Illustration | Male |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Male.png) | ![illustration for Male](../../fontawesome-5/Solid/Male.Local.png) |




## Male

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Male
include('fontawesome-5/Solid/Male')

' renders the element
Male('Male', 'Male', 'an optional tech label')
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

' loads the Item which embeds the element Male
include('fontawesome-5/Solid/Male')

' renders the element
Male('Male', 'Male', 'an optional tech label')
@enduml
```

