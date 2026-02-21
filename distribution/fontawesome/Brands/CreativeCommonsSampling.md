# CreativeCommonsSampling


```text
fontawesome/Brands/CreativeCommonsSampling
```

```text
include('fontawesome/Brands/CreativeCommonsSampling')
```



| Illustration | CreativeCommonsSampling |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/CreativeCommonsSampling.png) | ![illustration for CreativeCommonsSampling](../../fontawesome/Brands/CreativeCommonsSampling.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CreativeCommonsSamplingXs>`
- `<$CreativeCommonsSamplingSm>`
- `<$CreativeCommonsSamplingMd>`
- `<$CreativeCommonsSamplingLg>`





## CreativeCommonsSampling

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CreativeCommonsSampling
include('fontawesome/Brands/CreativeCommonsSampling')

' renders the element
CreativeCommonsSampling('CreativeCommonsSampling', 'Creative Commons Sampling', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CreativeCommonsSampling
include('fontawesome/Brands/CreativeCommonsSampling')

' renders the element
CreativeCommonsSampling('CreativeCommonsSampling', 'Creative Commons Sampling', 'an optional tech label', 'an optional description')
@enduml
```

