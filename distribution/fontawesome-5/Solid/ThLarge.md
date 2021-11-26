# ThLarge


```text
fontawesome-5/Solid/ThLarge
```

```text
include('fontawesome-5/Solid/ThLarge')
```



| Illustration | ThLarge |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ThLarge.png) | ![illustration for ThLarge](../../fontawesome-5/Solid/ThLarge.Local.png) |




## ThLarge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ThLarge
include('fontawesome-5/Solid/ThLarge')

' renders the element
ThLarge('ThLarge', 'Th Large', 'an optional tech label')
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

' loads the Item which embeds the element ThLarge
include('fontawesome-5/Solid/ThLarge')

' renders the element
ThLarge('ThLarge', 'Th Large', 'an optional tech label')
@enduml
```

