# CreativeCommonsNcJp


```text
fontawesome-6/Brands/CreativeCommonsNcJp
```

```text
include('fontawesome-6/Brands/CreativeCommonsNcJp')
```



| Illustration | CreativeCommonsNcJp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/CreativeCommonsNcJp.png) | ![illustration for CreativeCommonsNcJp](../../fontawesome-6/Brands/CreativeCommonsNcJp.Local.png) |




## CreativeCommonsNcJp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CreativeCommonsNcJp
include('fontawesome-6/Brands/CreativeCommonsNcJp')

' renders the element
CreativeCommonsNcJp('CreativeCommonsNcJp', 'Creative Commons Nc Jp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CreativeCommonsNcJp
include('fontawesome-6/Brands/CreativeCommonsNcJp')

' renders the element
CreativeCommonsNcJp('CreativeCommonsNcJp', 'Creative Commons Nc Jp', 'an optional tech label', 'an optional description')
@enduml
```

