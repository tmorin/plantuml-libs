# Vnv


```text
fontawesome/Brands/Vnv
```

```text
include('fontawesome/Brands/Vnv')
```



| Illustration | Vnv |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Vnv.png) | ![illustration for Vnv](../../fontawesome/Brands/Vnv.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VnvXs>`
- `<$VnvSm>`
- `<$VnvMd>`
- `<$VnvLg>`





## Vnv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Vnv
include('fontawesome/Brands/Vnv')

' renders the element
Vnv('Vnv', 'Vnv', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vnv
include('fontawesome/Brands/Vnv')

' renders the element
Vnv('Vnv', 'Vnv', 'an optional tech label', 'an optional description')
@enduml
```

