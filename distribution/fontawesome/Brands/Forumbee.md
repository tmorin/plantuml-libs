# Forumbee


```text
fontawesome/Brands/Forumbee
```

```text
include('fontawesome/Brands/Forumbee')
```



| Illustration | Forumbee |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Forumbee.png) | ![illustration for Forumbee](../../fontawesome/Brands/Forumbee.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ForumbeeXs>`
- `<$ForumbeeSm>`
- `<$ForumbeeMd>`
- `<$ForumbeeLg>`





## Forumbee

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Forumbee
include('fontawesome/Brands/Forumbee')

' renders the element
Forumbee('Forumbee', 'Forumbee', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Forumbee
include('fontawesome/Brands/Forumbee')

' renders the element
Forumbee('Forumbee', 'Forumbee', 'an optional tech label', 'an optional description')
@enduml
```

