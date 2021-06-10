# CreativeCommonsSampling


```text
fontawesome-5/Brands/CreativeCommonsSampling
```

```text
include('fontawesome-5/Brands/CreativeCommonsSampling')
```



| Illustration | CreativeCommonsSampling |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/CreativeCommonsSampling.png) | ![illustration for CreativeCommonsSampling](../../fontawesome-5/Brands/CreativeCommonsSampling.Local.png) |




## CreativeCommonsSampling

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CreativeCommonsSampling
include('fontawesome-5/Brands/CreativeCommonsSampling')

' renders the element
CreativeCommonsSampling('CreativeCommonsSampling', 'Creative Commons Sampling', 'an optional tech label')
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

' loads the Item which embeds the element CreativeCommonsSampling
include('fontawesome-5/Brands/CreativeCommonsSampling')

' renders the element
CreativeCommonsSampling('CreativeCommonsSampling', 'Creative Commons Sampling', 'an optional tech label')
@enduml
```

