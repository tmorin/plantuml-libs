# Ror


```text
fontawesome/Brands/Ror
```

```text
include('fontawesome/Brands/Ror')
```



| Illustration | Ror |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Ror.png) | ![illustration for Ror](../../fontawesome/Brands/Ror.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RorXs>`
- `<$RorSm>`
- `<$RorMd>`
- `<$RorLg>`





## Ror

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Ror
include('fontawesome/Brands/Ror')

' renders the element
Ror('Ror', 'Ror', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ror
include('fontawesome/Brands/Ror')

' renders the element
Ror('Ror', 'Ror', 'an optional tech label', 'an optional description')
@enduml
```

