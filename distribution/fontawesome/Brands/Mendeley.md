# Mendeley


```text
fontawesome/Brands/Mendeley
```

```text
include('fontawesome/Brands/Mendeley')
```



| Illustration | Mendeley |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Mendeley.png) | ![illustration for Mendeley](../../fontawesome/Brands/Mendeley.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MendeleyXs>`
- `<$MendeleySm>`
- `<$MendeleyMd>`
- `<$MendeleyLg>`





## Mendeley

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Mendeley
include('fontawesome/Brands/Mendeley')

' renders the element
Mendeley('Mendeley', 'Mendeley', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mendeley
include('fontawesome/Brands/Mendeley')

' renders the element
Mendeley('Mendeley', 'Mendeley', 'an optional tech label', 'an optional description')
@enduml
```

