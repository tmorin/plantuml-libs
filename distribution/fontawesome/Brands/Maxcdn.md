# Maxcdn


```text
fontawesome/Brands/Maxcdn
```

```text
include('fontawesome/Brands/Maxcdn')
```



| Illustration | Maxcdn |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Maxcdn.png) | ![illustration for Maxcdn](../../fontawesome/Brands/Maxcdn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MaxcdnXs>`
- `<$MaxcdnSm>`
- `<$MaxcdnMd>`
- `<$MaxcdnLg>`





## Maxcdn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Maxcdn
include('fontawesome/Brands/Maxcdn')

' renders the element
Maxcdn('Maxcdn', 'Maxcdn', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Maxcdn
include('fontawesome/Brands/Maxcdn')

' renders the element
Maxcdn('Maxcdn', 'Maxcdn', 'an optional tech label', 'an optional description')
@enduml
```

