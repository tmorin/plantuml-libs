# WordpressSimple


```text
fontawesome-5/Brands/WordpressSimple
```

```text
include('fontawesome-5/Brands/WordpressSimple')
```



| Illustration | WordpressSimple |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/WordpressSimple.png) | ![illustration for WordpressSimple](../../fontawesome-5/Brands/WordpressSimple.Local.png) |




## WordpressSimple

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element WordpressSimple
include('fontawesome-5/Brands/WordpressSimple')

' renders the element
WordpressSimple('WordpressSimple', 'Wordpress Simple', 'an optional tech label')
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

' loads the Item which embeds the element WordpressSimple
include('fontawesome-5/Brands/WordpressSimple')

' renders the element
WordpressSimple('WordpressSimple', 'Wordpress Simple', 'an optional tech label')
@enduml
```

