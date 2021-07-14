# Angular


```text
simpleicons-5/A/Angular
```

```text
include('simpleicons-5/A/Angular')
```



| Illustration | Angular |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Angular.png) | ![illustration for Angular](../../simpleicons-5/A/Angular.Local.png) |




## Angular

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Angular
include('simpleicons-5/A/Angular')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Angular
include('simpleicons-5/A/Angular')

' renders the element
Angular('Angular', 'Angular', 'an optional tech label')
@enduml
```

