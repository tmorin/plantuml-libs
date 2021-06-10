# Angular


```text
fontawesome-5/Brands/Angular
```

```text
include('fontawesome-5/Brands/Angular')
```



| Illustration | Angular |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Angular.png) | ![illustration for Angular](../../fontawesome-5/Brands/Angular.Local.png) |




## Angular

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Angular
include('fontawesome-5/Brands/Angular')

' renders the element
Angular('Angular', 'Angular', 'an optional tech label')
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

' loads the Item which embeds the element Angular
include('fontawesome-5/Brands/Angular')

' renders the element
Angular('Angular', 'Angular', 'an optional tech label')
@enduml
```

