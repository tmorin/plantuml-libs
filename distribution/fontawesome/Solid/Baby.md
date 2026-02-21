# Baby


```text
fontawesome/Solid/Baby
```

```text
include('fontawesome/Solid/Baby')
```



| Illustration | Baby |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Baby.png) | ![illustration for Baby](../../fontawesome/Solid/Baby.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BabyXs>`
- `<$BabySm>`
- `<$BabyMd>`
- `<$BabyLg>`





## Baby

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Baby
include('fontawesome/Solid/Baby')

' renders the element
Baby('Baby', 'Baby', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Baby
include('fontawesome/Solid/Baby')

' renders the element
Baby('Baby', 'Baby', 'an optional tech label', 'an optional description')
@enduml
```

