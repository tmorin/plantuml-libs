# KickstarterK


```text
fontawesome-6/Brands/KickstarterK
```

```text
include('fontawesome-6/Brands/KickstarterK')
```



| Illustration | KickstarterK |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/KickstarterK.png) | ![illustration for KickstarterK](../../fontawesome-6/Brands/KickstarterK.Local.png) |




## KickstarterK

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element KickstarterK
include('fontawesome-6/Brands/KickstarterK')

' renders the element
KickstarterK('KickstarterK', 'Kickstarter K', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element KickstarterK
include('fontawesome-6/Brands/KickstarterK')

' renders the element
KickstarterK('KickstarterK', 'Kickstarter K', 'an optional tech label', 'an optional description')
@enduml
```

