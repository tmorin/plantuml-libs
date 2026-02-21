# Audible


```text
fontawesome/Brands/Audible
```

```text
include('fontawesome/Brands/Audible')
```



| Illustration | Audible |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Audible.png) | ![illustration for Audible](../../fontawesome/Brands/Audible.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AudibleXs>`
- `<$AudibleSm>`
- `<$AudibleMd>`
- `<$AudibleLg>`





## Audible

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Audible
include('fontawesome/Brands/Audible')

' renders the element
Audible('Audible', 'Audible', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Audible
include('fontawesome/Brands/Audible')

' renders the element
Audible('Audible', 'Audible', 'an optional tech label', 'an optional description')
@enduml
```

