# Beer


```text
fontawesome/Solid/Beer
```

```text
include('fontawesome/Solid/Beer')
```



| Illustration | Beer |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Beer.png) | ![illustration for Beer](../../fontawesome/Solid/Beer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BeerXs>`
- `<$BeerSm>`
- `<$BeerMd>`
- `<$BeerLg>`





## Beer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Beer
include('fontawesome/Solid/Beer')

' renders the element
Beer('Beer', 'Beer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Beer
include('fontawesome/Solid/Beer')

' renders the element
Beer('Beer', 'Beer', 'an optional tech label', 'an optional description')
@enduml
```

