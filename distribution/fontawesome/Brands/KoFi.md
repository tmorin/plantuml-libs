# KoFi


```text
fontawesome/Brands/KoFi
```

```text
include('fontawesome/Brands/KoFi')
```



| Illustration | KoFi |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/KoFi.png) | ![illustration for KoFi](../../fontawesome/Brands/KoFi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KoFiXs>`
- `<$KoFiSm>`
- `<$KoFiMd>`
- `<$KoFiLg>`





## KoFi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element KoFi
include('fontawesome/Brands/KoFi')

' renders the element
KoFi('KoFi', 'Ko Fi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element KoFi
include('fontawesome/Brands/KoFi')

' renders the element
KoFi('KoFi', 'Ko Fi', 'an optional tech label', 'an optional description')
@enduml
```

