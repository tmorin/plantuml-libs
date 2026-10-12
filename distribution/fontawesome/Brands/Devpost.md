# Devpost


```text
fontawesome/Brands/Devpost
```

```text
include('fontawesome/Brands/Devpost')
```



| Illustration | Devpost |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Devpost.png) | ![illustration for Devpost](../../fontawesome/Brands/Devpost.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DevpostXs>`
- `<$DevpostSm>`
- `<$DevpostMd>`
- `<$DevpostLg>`





## Devpost

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Devpost
include('fontawesome/Brands/Devpost')

' renders the element
Devpost('Devpost', 'Devpost', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Devpost
include('fontawesome/Brands/Devpost')

' renders the element
Devpost('Devpost', 'Devpost', 'an optional tech label', 'an optional description')
@enduml
```

