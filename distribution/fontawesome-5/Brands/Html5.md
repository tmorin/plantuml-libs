# Html5


```text
fontawesome-5/Brands/Html5
```

```text
include('fontawesome-5/Brands/Html5')
```



| Illustration | Html5 |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Html5.png) | ![illustration for Html5](../../fontawesome-5/Brands/Html5.Local.png) |




## Html5

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Html5
include('fontawesome-5/Brands/Html5')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Html5
include('fontawesome-5/Brands/Html5')

' renders the element
Html5('Html5', 'Html5', 'an optional tech label')
@enduml
```

