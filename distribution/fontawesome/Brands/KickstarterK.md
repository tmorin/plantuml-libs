# KickstarterK


```text
fontawesome/Brands/KickstarterK
```

```text
include('fontawesome/Brands/KickstarterK')
```



| Illustration | KickstarterK |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/KickstarterK.png) | ![illustration for KickstarterK](../../fontawesome/Brands/KickstarterK.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KickstarterKXs>`
- `<$KickstarterKSm>`
- `<$KickstarterKMd>`
- `<$KickstarterKLg>`





## KickstarterK

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element KickstarterK
include('fontawesome/Brands/KickstarterK')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element KickstarterK
include('fontawesome/Brands/KickstarterK')

' renders the element
KickstarterK('KickstarterK', 'Kickstarter K', 'an optional tech label', 'an optional description')
@enduml
```

