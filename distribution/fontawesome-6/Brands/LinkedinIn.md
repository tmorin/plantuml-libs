# LinkedinIn


```text
fontawesome-6/Brands/LinkedinIn
```

```text
include('fontawesome-6/Brands/LinkedinIn')
```



| Illustration | LinkedinIn |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/LinkedinIn.png) | ![illustration for LinkedinIn](../../fontawesome-6/Brands/LinkedinIn.Local.png) |




## LinkedinIn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element LinkedinIn
include('fontawesome-6/Brands/LinkedinIn')

' renders the element
LinkedinIn('LinkedinIn', 'Linkedin In', 'an optional tech label')
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

' loads the Item which embeds the element LinkedinIn
include('fontawesome-6/Brands/LinkedinIn')

' renders the element
LinkedinIn('LinkedinIn', 'Linkedin In', 'an optional tech label')
@enduml
```

