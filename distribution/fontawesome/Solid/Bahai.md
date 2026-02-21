# Bahai


```text
fontawesome/Solid/Bahai
```

```text
include('fontawesome/Solid/Bahai')
```



| Illustration | Bahai |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Bahai.png) | ![illustration for Bahai](../../fontawesome/Solid/Bahai.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BahaiXs>`
- `<$BahaiSm>`
- `<$BahaiMd>`
- `<$BahaiLg>`





## Bahai

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Bahai
include('fontawesome/Solid/Bahai')

' renders the element
Bahai('Bahai', 'Bahai', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bahai
include('fontawesome/Solid/Bahai')

' renders the element
Bahai('Bahai', 'Bahai', 'an optional tech label', 'an optional description')
@enduml
```

