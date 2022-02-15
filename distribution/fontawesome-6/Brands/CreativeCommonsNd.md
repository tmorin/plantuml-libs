# CreativeCommonsNd


```text
fontawesome-6/Brands/CreativeCommonsNd
```

```text
include('fontawesome-6/Brands/CreativeCommonsNd')
```



| Illustration | CreativeCommonsNd |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/CreativeCommonsNd.png) | ![illustration for CreativeCommonsNd](../../fontawesome-6/Brands/CreativeCommonsNd.Local.png) |




## CreativeCommonsNd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CreativeCommonsNd
include('fontawesome-6/Brands/CreativeCommonsNd')

' renders the element
CreativeCommonsNd('CreativeCommonsNd', 'Creative Commons Nd', 'an optional tech label')
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

' loads the Item which embeds the element CreativeCommonsNd
include('fontawesome-6/Brands/CreativeCommonsNd')

' renders the element
CreativeCommonsNd('CreativeCommonsNd', 'Creative Commons Nd', 'an optional tech label')
@enduml
```

