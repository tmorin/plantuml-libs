# DigitalOcean


```text
fontawesome/Brands/DigitalOcean
```

```text
include('fontawesome/Brands/DigitalOcean')
```



| Illustration | DigitalOcean |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/DigitalOcean.png) | ![illustration for DigitalOcean](../../fontawesome/Brands/DigitalOcean.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DigitalOceanXs>`
- `<$DigitalOceanSm>`
- `<$DigitalOceanMd>`
- `<$DigitalOceanLg>`





## DigitalOcean

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element DigitalOcean
include('fontawesome/Brands/DigitalOcean')

' renders the element
DigitalOcean('DigitalOcean', 'Digital Ocean', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DigitalOcean
include('fontawesome/Brands/DigitalOcean')

' renders the element
DigitalOcean('DigitalOcean', 'Digital Ocean', 'an optional tech label', 'an optional description')
@enduml
```

