# PersonBooth


```text
fontawesome-5/Solid/PersonBooth
```

```text
include('fontawesome-5/Solid/PersonBooth')
```



| Illustration | PersonBooth |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/PersonBooth.png) | ![illustration for PersonBooth](../../fontawesome-5/Solid/PersonBooth.Local.png) |




## PersonBooth

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PersonBooth
include('fontawesome-5/Solid/PersonBooth')

' renders the element
PersonBooth('PersonBooth', 'Person Booth', 'an optional tech label')
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

' loads the Item which embeds the element PersonBooth
include('fontawesome-5/Solid/PersonBooth')

' renders the element
PersonBooth('PersonBooth', 'Person Booth', 'an optional tech label')
@enduml
```

