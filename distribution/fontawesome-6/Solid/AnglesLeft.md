# AnglesLeft


```text
fontawesome-6/Solid/AnglesLeft
```

```text
include('fontawesome-6/Solid/AnglesLeft')
```



| Illustration | AnglesLeft |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/AnglesLeft.png) | ![illustration for AnglesLeft](../../fontawesome-6/Solid/AnglesLeft.Local.png) |




## AnglesLeft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element AnglesLeft
include('fontawesome-6/Solid/AnglesLeft')

' renders the element
AnglesLeft('AnglesLeft', 'Angles Left', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AnglesLeft
include('fontawesome-6/Solid/AnglesLeft')

' renders the element
AnglesLeft('AnglesLeft', 'Angles Left', 'an optional tech label', 'an optional description')
@enduml
```

