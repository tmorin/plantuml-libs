# Phone


```text
fontawesome-5/Solid/Phone
```

```text
include('fontawesome-5/Solid/Phone')
```



| Illustration | Phone |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Phone.png) | ![illustration for Phone](../../fontawesome-5/Solid/Phone.Local.png) |




## Phone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Phone
include('fontawesome-5/Solid/Phone')

' renders the element
Phone('Phone', 'Phone', 'an optional tech label')
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

' loads the Item which embeds the element Phone
include('fontawesome-5/Solid/Phone')

' renders the element
Phone('Phone', 'Phone', 'an optional tech label')
@enduml
```

