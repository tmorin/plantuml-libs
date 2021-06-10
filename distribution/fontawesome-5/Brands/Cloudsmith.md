# Cloudsmith


```text
fontawesome-5/Brands/Cloudsmith
```

```text
include('fontawesome-5/Brands/Cloudsmith')
```



| Illustration | Cloudsmith |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Cloudsmith.png) | ![illustration for Cloudsmith](../../fontawesome-5/Brands/Cloudsmith.Local.png) |




## Cloudsmith

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Cloudsmith
include('fontawesome-5/Brands/Cloudsmith')

' renders the element
Cloudsmith('Cloudsmith', 'Cloudsmith', 'an optional tech label')
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

' loads the Item which embeds the element Cloudsmith
include('fontawesome-5/Brands/Cloudsmith')

' renders the element
Cloudsmith('Cloudsmith', 'Cloudsmith', 'an optional tech label')
@enduml
```

