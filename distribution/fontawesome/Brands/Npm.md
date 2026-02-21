# Npm


```text
fontawesome/Brands/Npm
```

```text
include('fontawesome/Brands/Npm')
```



| Illustration | Npm |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Npm.png) | ![illustration for Npm](../../fontawesome/Brands/Npm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NpmXs>`
- `<$NpmSm>`
- `<$NpmMd>`
- `<$NpmLg>`





## Npm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Npm
include('fontawesome/Brands/Npm')

' renders the element
Npm('Npm', 'Npm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Npm
include('fontawesome/Brands/Npm')

' renders the element
Npm('Npm', 'Npm', 'an optional tech label', 'an optional description')
@enduml
```

