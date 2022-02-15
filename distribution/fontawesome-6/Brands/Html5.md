# Html5


```text
fontawesome-6/Brands/Html5
```

```text
include('fontawesome-6/Brands/Html5')
```



| Illustration | Html5 |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Html5.png) | ![illustration for Html5](../../fontawesome-6/Brands/Html5.Local.png) |




## Html5

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Html5
include('fontawesome-6/Brands/Html5')

' renders the element
Html5('Html5', 'Html5', 'an optional tech label')
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

' loads the Item which embeds the element Html5
include('fontawesome-6/Brands/Html5')

' renders the element
Html5('Html5', 'Html5', 'an optional tech label')
@enduml
```

