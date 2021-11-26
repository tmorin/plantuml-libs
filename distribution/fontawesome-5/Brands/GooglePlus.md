# GooglePlus


```text
fontawesome-5/Brands/GooglePlus
```

```text
include('fontawesome-5/Brands/GooglePlus')
```



| Illustration | GooglePlus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/GooglePlus.png) | ![illustration for GooglePlus](../../fontawesome-5/Brands/GooglePlus.Local.png) |




## GooglePlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GooglePlus
include('fontawesome-5/Brands/GooglePlus')

' renders the element
GooglePlus('GooglePlus', 'Google Plus', 'an optional tech label')
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

' loads the Item which embeds the element GooglePlus
include('fontawesome-5/Brands/GooglePlus')

' renders the element
GooglePlus('GooglePlus', 'Google Plus', 'an optional tech label')
@enduml
```

