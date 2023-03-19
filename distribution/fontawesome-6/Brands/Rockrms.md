# Rockrms


```text
fontawesome-6/Brands/Rockrms
```

```text
include('fontawesome-6/Brands/Rockrms')
```



| Illustration | Rockrms |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Rockrms.png) | ![illustration for Rockrms](../../fontawesome-6/Brands/Rockrms.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RockrmsXs>`
- `<$RockrmsSm>`
- `<$RockrmsMd>`
- `<$RockrmsLg>`





## Rockrms

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Rockrms
include('fontawesome-6/Brands/Rockrms')

' renders the element
Rockrms('Rockrms', 'Rockrms', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rockrms
include('fontawesome-6/Brands/Rockrms')

' renders the element
Rockrms('Rockrms', 'Rockrms', 'an optional tech label', 'an optional description')
@enduml
```

