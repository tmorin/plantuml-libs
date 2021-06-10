# LinkedinIn


```text
fontawesome-5/Brands/LinkedinIn
```

```text
include('fontawesome-5/Brands/LinkedinIn')
```



| Illustration | LinkedinIn |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/LinkedinIn.png) | ![illustration for LinkedinIn](../../fontawesome-5/Brands/LinkedinIn.Local.png) |




## LinkedinIn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element LinkedinIn
include('fontawesome-5/Brands/LinkedinIn')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element LinkedinIn
include('fontawesome-5/Brands/LinkedinIn')

' renders the element
LinkedinIn('LinkedinIn', 'Linkedin In', 'an optional tech label')
@enduml
```

