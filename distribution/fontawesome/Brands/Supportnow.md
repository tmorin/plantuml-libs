# Supportnow


```text
fontawesome/Brands/Supportnow
```

```text
include('fontawesome/Brands/Supportnow')
```



| Illustration | Supportnow |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Supportnow.png) | ![illustration for Supportnow](../../fontawesome/Brands/Supportnow.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SupportnowXs>`
- `<$SupportnowSm>`
- `<$SupportnowMd>`
- `<$SupportnowLg>`





## Supportnow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Supportnow
include('fontawesome/Brands/Supportnow')

' renders the element
Supportnow('Supportnow', 'Supportnow', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Supportnow
include('fontawesome/Brands/Supportnow')

' renders the element
Supportnow('Supportnow', 'Supportnow', 'an optional tech label', 'an optional description')
@enduml
```

