# Linkedin


```text
fontawesome/Brands/Linkedin
```

```text
include('fontawesome/Brands/Linkedin')
```



| Illustration | Linkedin |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Linkedin.png) | ![illustration for Linkedin](../../fontawesome/Brands/Linkedin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LinkedinXs>`
- `<$LinkedinSm>`
- `<$LinkedinMd>`
- `<$LinkedinLg>`





## Linkedin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Linkedin
include('fontawesome/Brands/Linkedin')

' renders the element
Linkedin('Linkedin', 'Linkedin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Linkedin
include('fontawesome/Brands/Linkedin')

' renders the element
Linkedin('Linkedin', 'Linkedin', 'an optional tech label', 'an optional description')
@enduml
```

