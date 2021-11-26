# DigitalOcean


```text
fontawesome-5/Brands/DigitalOcean
```

```text
include('fontawesome-5/Brands/DigitalOcean')
```



| Illustration | DigitalOcean |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/DigitalOcean.png) | ![illustration for DigitalOcean](../../fontawesome-5/Brands/DigitalOcean.Local.png) |




## DigitalOcean

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element DigitalOcean
include('fontawesome-5/Brands/DigitalOcean')

' renders the element
DigitalOcean('DigitalOcean', 'Digital Ocean', 'an optional tech label')
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

' loads the Item which embeds the element DigitalOcean
include('fontawesome-5/Brands/DigitalOcean')

' renders the element
DigitalOcean('DigitalOcean', 'Digital Ocean', 'an optional tech label')
@enduml
```

