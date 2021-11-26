# SelfImprovement


```text
material-4/Social/SelfImprovement
```

```text
include('material-4/Social/SelfImprovement')
```



| Illustration | SelfImprovement |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/SelfImprovement.png) | ![illustration for SelfImprovement](../../material-4/Social/SelfImprovement.Local.png) |




## SelfImprovement

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SelfImprovement
include('material-4/Social/SelfImprovement')

' renders the element
SelfImprovement('SelfImprovement', 'Self Improvement', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element SelfImprovement
include('material-4/Social/SelfImprovement')

' renders the element
SelfImprovement('SelfImprovement', 'Self Improvement', 'an optional tech label')
@enduml
```

