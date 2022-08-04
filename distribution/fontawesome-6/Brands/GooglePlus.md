# GooglePlus


```text
fontawesome-6/Brands/GooglePlus
```

```text
include('fontawesome-6/Brands/GooglePlus')
```



| Illustration | GooglePlus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/GooglePlus.png) | ![illustration for GooglePlus](../../fontawesome-6/Brands/GooglePlus.Local.png) |




## GooglePlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element GooglePlus
include('fontawesome-6/Brands/GooglePlus')

' renders the element
GooglePlus('GooglePlus', 'Google Plus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GooglePlus
include('fontawesome-6/Brands/GooglePlus')

' renders the element
GooglePlus('GooglePlus', 'Google Plus', 'an optional tech label', 'an optional description')
@enduml
```

