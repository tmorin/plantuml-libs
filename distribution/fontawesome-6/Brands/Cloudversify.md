# Cloudversify


```text
fontawesome-6/Brands/Cloudversify
```

```text
include('fontawesome-6/Brands/Cloudversify')
```



| Illustration | Cloudversify |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Cloudversify.png) | ![illustration for Cloudversify](../../fontawesome-6/Brands/Cloudversify.Local.png) |




## Cloudversify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Cloudversify
include('fontawesome-6/Brands/Cloudversify')

' renders the element
Cloudversify('Cloudversify', 'Cloudversify', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cloudversify
include('fontawesome-6/Brands/Cloudversify')

' renders the element
Cloudversify('Cloudversify', 'Cloudversify', 'an optional tech label', 'an optional description')
@enduml
```

