# Forgejo


```text
fontawesome/Brands/Forgejo
```

```text
include('fontawesome/Brands/Forgejo')
```



| Illustration | Forgejo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Forgejo.png) | ![illustration for Forgejo](../../fontawesome/Brands/Forgejo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ForgejoXs>`
- `<$ForgejoSm>`
- `<$ForgejoMd>`
- `<$ForgejoLg>`





## Forgejo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Forgejo
include('fontawesome/Brands/Forgejo')

' renders the element
Forgejo('Forgejo', 'Forgejo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Forgejo
include('fontawesome/Brands/Forgejo')

' renders the element
Forgejo('Forgejo', 'Forgejo', 'an optional tech label', 'an optional description')
@enduml
```

