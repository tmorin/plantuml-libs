# KickstarterK


```text
fontawesome-5/Brands/KickstarterK
```

```text
include('fontawesome-5/Brands/KickstarterK')
```



| Illustration | KickstarterK |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/KickstarterK.png) | ![illustration for KickstarterK](../../fontawesome-5/Brands/KickstarterK.Local.png) |




## KickstarterK

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element KickstarterK
include('fontawesome-5/Brands/KickstarterK')

' renders the element
KickstarterK('KickstarterK', 'Kickstarter K', 'an optional tech label')
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

' loads the Item which embeds the element KickstarterK
include('fontawesome-5/Brands/KickstarterK')

' renders the element
KickstarterK('KickstarterK', 'Kickstarter K', 'an optional tech label')
@enduml
```

