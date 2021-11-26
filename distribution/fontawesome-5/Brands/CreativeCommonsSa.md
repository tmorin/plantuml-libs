# CreativeCommonsSa


```text
fontawesome-5/Brands/CreativeCommonsSa
```

```text
include('fontawesome-5/Brands/CreativeCommonsSa')
```



| Illustration | CreativeCommonsSa |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/CreativeCommonsSa.png) | ![illustration for CreativeCommonsSa](../../fontawesome-5/Brands/CreativeCommonsSa.Local.png) |




## CreativeCommonsSa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CreativeCommonsSa
include('fontawesome-5/Brands/CreativeCommonsSa')

' renders the element
CreativeCommonsSa('CreativeCommonsSa', 'Creative Commons Sa', 'an optional tech label')
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

' loads the Item which embeds the element CreativeCommonsSa
include('fontawesome-5/Brands/CreativeCommonsSa')

' renders the element
CreativeCommonsSa('CreativeCommonsSa', 'Creative Commons Sa', 'an optional tech label')
@enduml
```

