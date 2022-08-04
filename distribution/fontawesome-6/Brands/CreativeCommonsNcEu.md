# CreativeCommonsNcEu


```text
fontawesome-6/Brands/CreativeCommonsNcEu
```

```text
include('fontawesome-6/Brands/CreativeCommonsNcEu')
```



| Illustration | CreativeCommonsNcEu |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/CreativeCommonsNcEu.png) | ![illustration for CreativeCommonsNcEu](../../fontawesome-6/Brands/CreativeCommonsNcEu.Local.png) |




## CreativeCommonsNcEu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CreativeCommonsNcEu
include('fontawesome-6/Brands/CreativeCommonsNcEu')

' renders the element
CreativeCommonsNcEu('CreativeCommonsNcEu', 'Creative Commons Nc Eu', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CreativeCommonsNcEu
include('fontawesome-6/Brands/CreativeCommonsNcEu')

' renders the element
CreativeCommonsNcEu('CreativeCommonsNcEu', 'Creative Commons Nc Eu', 'an optional tech label', 'an optional description')
@enduml
```

