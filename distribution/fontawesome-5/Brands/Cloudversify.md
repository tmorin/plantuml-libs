# Cloudversify


```text
fontawesome-5/Brands/Cloudversify
```

```text
include('fontawesome-5/Brands/Cloudversify')
```



| Illustration | Cloudversify |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Cloudversify.png) | ![illustration for Cloudversify](../../fontawesome-5/Brands/Cloudversify.Local.png) |




## Cloudversify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Cloudversify
include('fontawesome-5/Brands/Cloudversify')

' renders the element
Cloudversify('Cloudversify', 'Cloudversify', 'an optional tech label')
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

' loads the Item which embeds the element Cloudversify
include('fontawesome-5/Brands/Cloudversify')

' renders the element
Cloudversify('Cloudversify', 'Cloudversify', 'an optional tech label')
@enduml
```

