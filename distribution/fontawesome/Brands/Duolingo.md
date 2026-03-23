# Duolingo


```text
fontawesome/Brands/Duolingo
```

```text
include('fontawesome/Brands/Duolingo')
```



| Illustration | Duolingo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Duolingo.png) | ![illustration for Duolingo](../../fontawesome/Brands/Duolingo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DuolingoXs>`
- `<$DuolingoSm>`
- `<$DuolingoMd>`
- `<$DuolingoLg>`





## Duolingo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Duolingo
include('fontawesome/Brands/Duolingo')

' renders the element
Duolingo('Duolingo', 'Duolingo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Duolingo
include('fontawesome/Brands/Duolingo')

' renders the element
Duolingo('Duolingo', 'Duolingo', 'an optional tech label', 'an optional description')
@enduml
```

