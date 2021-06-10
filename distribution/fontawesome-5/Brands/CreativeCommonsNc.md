# CreativeCommonsNc


```text
fontawesome-5/Brands/CreativeCommonsNc
```

```text
include('fontawesome-5/Brands/CreativeCommonsNc')
```



| Illustration | CreativeCommonsNc |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/CreativeCommonsNc.png) | ![illustration for CreativeCommonsNc](../../fontawesome-5/Brands/CreativeCommonsNc.Local.png) |




## CreativeCommonsNc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CreativeCommonsNc
include('fontawesome-5/Brands/CreativeCommonsNc')

' renders the element
CreativeCommonsNc('CreativeCommonsNc', 'Creative Commons Nc', 'an optional tech label')
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

' loads the Item which embeds the element CreativeCommonsNc
include('fontawesome-5/Brands/CreativeCommonsNc')

' renders the element
CreativeCommonsNc('CreativeCommonsNc', 'Creative Commons Nc', 'an optional tech label')
@enduml
```

