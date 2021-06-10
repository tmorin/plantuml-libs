# Cookie


```text
fontawesome-5/Solid/Cookie
```

```text
include('fontawesome-5/Solid/Cookie')
```



| Illustration | Cookie |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Cookie.png) | ![illustration for Cookie](../../fontawesome-5/Solid/Cookie.Local.png) |




## Cookie

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Cookie
include('fontawesome-5/Solid/Cookie')

' renders the element
Cookie('Cookie', 'Cookie', 'an optional tech label')
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

' loads the Item which embeds the element Cookie
include('fontawesome-5/Solid/Cookie')

' renders the element
Cookie('Cookie', 'Cookie', 'an optional tech label')
@enduml
```

