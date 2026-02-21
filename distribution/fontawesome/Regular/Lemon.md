# Lemon


```text
fontawesome/Regular/Lemon
```

```text
include('fontawesome/Regular/Lemon')
```



| Illustration | Lemon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/Lemon.png) | ![illustration for Lemon](../../fontawesome/Regular/Lemon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LemonXs>`
- `<$LemonSm>`
- `<$LemonMd>`
- `<$LemonLg>`





## Lemon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Lemon
include('fontawesome/Regular/Lemon')

' renders the element
Lemon('Lemon', 'Lemon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lemon
include('fontawesome/Regular/Lemon')

' renders the element
Lemon('Lemon', 'Lemon', 'an optional tech label', 'an optional description')
@enduml
```

