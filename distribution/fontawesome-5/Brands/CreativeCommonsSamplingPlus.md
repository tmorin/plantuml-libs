# CreativeCommonsSamplingPlus


```text
fontawesome-5/Brands/CreativeCommonsSamplingPlus
```

```text
include('fontawesome-5/Brands/CreativeCommonsSamplingPlus')
```



| Illustration | CreativeCommonsSamplingPlus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/CreativeCommonsSamplingPlus.png) | ![illustration for CreativeCommonsSamplingPlus](../../fontawesome-5/Brands/CreativeCommonsSamplingPlus.Local.png) |




## CreativeCommonsSamplingPlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CreativeCommonsSamplingPlus
include('fontawesome-5/Brands/CreativeCommonsSamplingPlus')

' renders the element
CreativeCommonsSamplingPlus('CreativeCommonsSamplingPlus', 'Creative Commons Sampling Plus', 'an optional tech label')
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

' loads the Item which embeds the element CreativeCommonsSamplingPlus
include('fontawesome-5/Brands/CreativeCommonsSamplingPlus')

' renders the element
CreativeCommonsSamplingPlus('CreativeCommonsSamplingPlus', 'Creative Commons Sampling Plus', 'an optional tech label')
@enduml
```

