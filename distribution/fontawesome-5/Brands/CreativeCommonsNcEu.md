# CreativeCommonsNcEu


```text
fontawesome-5/Brands/CreativeCommonsNcEu
```

```text
include('fontawesome-5/Brands/CreativeCommonsNcEu')
```



| Illustration | CreativeCommonsNcEu |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/CreativeCommonsNcEu.png) | ![illustration for CreativeCommonsNcEu](../../fontawesome-5/Brands/CreativeCommonsNcEu.Local.png) |




## CreativeCommonsNcEu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CreativeCommonsNcEu
include('fontawesome-5/Brands/CreativeCommonsNcEu')

' renders the element
CreativeCommonsNcEu('CreativeCommonsNcEu', 'Creative Commons Nc Eu', 'an optional tech label')
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

' loads the Item which embeds the element CreativeCommonsNcEu
include('fontawesome-5/Brands/CreativeCommonsNcEu')

' renders the element
CreativeCommonsNcEu('CreativeCommonsNcEu', 'Creative Commons Nc Eu', 'an optional tech label')
@enduml
```

