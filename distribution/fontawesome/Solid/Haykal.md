# Haykal


```text
fontawesome/Solid/Haykal
```

```text
include('fontawesome/Solid/Haykal')
```



| Illustration | Haykal |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Haykal.png) | ![illustration for Haykal](../../fontawesome/Solid/Haykal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HaykalXs>`
- `<$HaykalSm>`
- `<$HaykalMd>`
- `<$HaykalLg>`





## Haykal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Haykal
include('fontawesome/Solid/Haykal')

' renders the element
Haykal('Haykal', 'Haykal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Haykal
include('fontawesome/Solid/Haykal')

' renders the element
Haykal('Haykal', 'Haykal', 'an optional tech label', 'an optional description')
@enduml
```

