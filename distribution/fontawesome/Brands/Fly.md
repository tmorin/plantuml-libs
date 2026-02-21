# Fly


```text
fontawesome/Brands/Fly
```

```text
include('fontawesome/Brands/Fly')
```



| Illustration | Fly |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Fly.png) | ![illustration for Fly](../../fontawesome/Brands/Fly.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FlyXs>`
- `<$FlySm>`
- `<$FlyMd>`
- `<$FlyLg>`





## Fly

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Fly
include('fontawesome/Brands/Fly')

' renders the element
Fly('Fly', 'Fly', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fly
include('fontawesome/Brands/Fly')

' renders the element
Fly('Fly', 'Fly', 'an optional tech label', 'an optional description')
@enduml
```

