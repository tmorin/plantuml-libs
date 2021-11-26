# Opera


```text
fontawesome-5/Brands/Opera
```

```text
include('fontawesome-5/Brands/Opera')
```



| Illustration | Opera |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Opera.png) | ![illustration for Opera](../../fontawesome-5/Brands/Opera.Local.png) |




## Opera

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Opera
include('fontawesome-5/Brands/Opera')

' renders the element
Opera('Opera', 'Opera', 'an optional tech label')
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

' loads the Item which embeds the element Opera
include('fontawesome-5/Brands/Opera')

' renders the element
Opera('Opera', 'Opera', 'an optional tech label')
@enduml
```

