# Google


```text
fontawesome-6/Brands/Google
```

```text
include('fontawesome-6/Brands/Google')
```



| Illustration | Google |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Google.png) | ![illustration for Google](../../fontawesome-6/Brands/Google.Local.png) |




## Google

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Google
include('fontawesome-6/Brands/Google')

' renders the element
Google('Google', 'Google', 'an optional tech label')
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

' loads the Item which embeds the element Google
include('fontawesome-6/Brands/Google')

' renders the element
Google('Google', 'Google', 'an optional tech label')
@enduml
```

