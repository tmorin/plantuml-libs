# InternetExplorer


```text
fontawesome-6/Brands/InternetExplorer
```

```text
include('fontawesome-6/Brands/InternetExplorer')
```



| Illustration | InternetExplorer |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/InternetExplorer.png) | ![illustration for InternetExplorer](../../fontawesome-6/Brands/InternetExplorer.Local.png) |




## InternetExplorer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element InternetExplorer
include('fontawesome-6/Brands/InternetExplorer')

' renders the element
InternetExplorer('InternetExplorer', 'Internet Explorer', 'an optional tech label')
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

' loads the Item which embeds the element InternetExplorer
include('fontawesome-6/Brands/InternetExplorer')

' renders the element
InternetExplorer('InternetExplorer', 'Internet Explorer', 'an optional tech label')
@enduml
```

