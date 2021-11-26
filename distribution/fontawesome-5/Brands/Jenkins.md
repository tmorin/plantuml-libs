# Jenkins


```text
fontawesome-5/Brands/Jenkins
```

```text
include('fontawesome-5/Brands/Jenkins')
```



| Illustration | Jenkins |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Jenkins.png) | ![illustration for Jenkins](../../fontawesome-5/Brands/Jenkins.Local.png) |




## Jenkins

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Jenkins
include('fontawesome-5/Brands/Jenkins')

' renders the element
Jenkins('Jenkins', 'Jenkins', 'an optional tech label')
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

' loads the Item which embeds the element Jenkins
include('fontawesome-5/Brands/Jenkins')

' renders the element
Jenkins('Jenkins', 'Jenkins', 'an optional tech label')
@enduml
```

