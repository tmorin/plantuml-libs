# Ello


```text
fontawesome/Brands/Ello
```

```text
include('fontawesome/Brands/Ello')
```



| Illustration | Ello |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Ello.png) | ![illustration for Ello](../../fontawesome/Brands/Ello.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ElloXs>`
- `<$ElloSm>`
- `<$ElloMd>`
- `<$ElloLg>`





## Ello

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Ello
include('fontawesome/Brands/Ello')

' renders the element
Ello('Ello', 'Ello', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ello
include('fontawesome/Brands/Ello')

' renders the element
Ello('Ello', 'Ello', 'an optional tech label', 'an optional description')
@enduml
```

