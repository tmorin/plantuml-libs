# Grav


```text
fontawesome/Brands/Grav
```

```text
include('fontawesome/Brands/Grav')
```



| Illustration | Grav |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Grav.png) | ![illustration for Grav](../../fontawesome/Brands/Grav.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GravXs>`
- `<$GravSm>`
- `<$GravMd>`
- `<$GravLg>`





## Grav

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Grav
include('fontawesome/Brands/Grav')

' renders the element
Grav('Grav', 'Grav', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Grav
include('fontawesome/Brands/Grav')

' renders the element
Grav('Grav', 'Grav', 'an optional tech label', 'an optional description')
@enduml
```

