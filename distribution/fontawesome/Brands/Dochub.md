# Dochub


```text
fontawesome/Brands/Dochub
```

```text
include('fontawesome/Brands/Dochub')
```



| Illustration | Dochub |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Dochub.png) | ![illustration for Dochub](../../fontawesome/Brands/Dochub.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DochubXs>`
- `<$DochubSm>`
- `<$DochubMd>`
- `<$DochubLg>`





## Dochub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Dochub
include('fontawesome/Brands/Dochub')

' renders the element
Dochub('Dochub', 'Dochub', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dochub
include('fontawesome/Brands/Dochub')

' renders the element
Dochub('Dochub', 'Dochub', 'an optional tech label', 'an optional description')
@enduml
```

