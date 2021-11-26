# Unity


```text
fontawesome-5/Brands/Unity
```

```text
include('fontawesome-5/Brands/Unity')
```



| Illustration | Unity |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Unity.png) | ![illustration for Unity](../../fontawesome-5/Brands/Unity.Local.png) |




## Unity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Unity
include('fontawesome-5/Brands/Unity')

' renders the element
Unity('Unity', 'Unity', 'an optional tech label')
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

' loads the Item which embeds the element Unity
include('fontawesome-5/Brands/Unity')

' renders the element
Unity('Unity', 'Unity', 'an optional tech label')
@enduml
```

