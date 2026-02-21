# Crow


```text
fontawesome/Solid/Crow
```

```text
include('fontawesome/Solid/Crow')
```



| Illustration | Crow |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Crow.png) | ![illustration for Crow](../../fontawesome/Solid/Crow.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CrowXs>`
- `<$CrowSm>`
- `<$CrowMd>`
- `<$CrowLg>`





## Crow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Crow
include('fontawesome/Solid/Crow')

' renders the element
Crow('Crow', 'Crow', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Crow
include('fontawesome/Solid/Crow')

' renders the element
Crow('Crow', 'Crow', 'an optional tech label', 'an optional description')
@enduml
```

