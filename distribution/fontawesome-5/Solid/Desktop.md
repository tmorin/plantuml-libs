# Desktop


```text
fontawesome-5/Solid/Desktop
```

```text
include('fontawesome-5/Solid/Desktop')
```



| Illustration | Desktop |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Desktop.png) | ![illustration for Desktop](../../fontawesome-5/Solid/Desktop.Local.png) |




## Desktop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Desktop
include('fontawesome-5/Solid/Desktop')

' renders the element
Desktop('Desktop', 'Desktop', 'an optional tech label')
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

' loads the Item which embeds the element Desktop
include('fontawesome-5/Solid/Desktop')

' renders the element
Desktop('Desktop', 'Desktop', 'an optional tech label')
@enduml
```

