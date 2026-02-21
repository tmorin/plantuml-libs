# CreativeCommonsSamplingPlus


```text
fontawesome/Brands/CreativeCommonsSamplingPlus
```

```text
include('fontawesome/Brands/CreativeCommonsSamplingPlus')
```



| Illustration | CreativeCommonsSamplingPlus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/CreativeCommonsSamplingPlus.png) | ![illustration for CreativeCommonsSamplingPlus](../../fontawesome/Brands/CreativeCommonsSamplingPlus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CreativeCommonsSamplingPlusXs>`
- `<$CreativeCommonsSamplingPlusSm>`
- `<$CreativeCommonsSamplingPlusMd>`
- `<$CreativeCommonsSamplingPlusLg>`





## CreativeCommonsSamplingPlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CreativeCommonsSamplingPlus
include('fontawesome/Brands/CreativeCommonsSamplingPlus')

' renders the element
CreativeCommonsSamplingPlus('CreativeCommonsSamplingPlus', 'Creative Commons Sampling Plus', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element CreativeCommonsSamplingPlus
include('fontawesome/Brands/CreativeCommonsSamplingPlus')

' renders the element
CreativeCommonsSamplingPlus('CreativeCommonsSamplingPlus', 'Creative Commons Sampling Plus', 'an optional tech label', 'an optional description')
@enduml
```

