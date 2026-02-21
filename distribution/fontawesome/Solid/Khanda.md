# Khanda


```text
fontawesome/Solid/Khanda
```

```text
include('fontawesome/Solid/Khanda')
```



| Illustration | Khanda |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Khanda.png) | ![illustration for Khanda](../../fontawesome/Solid/Khanda.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KhandaXs>`
- `<$KhandaSm>`
- `<$KhandaMd>`
- `<$KhandaLg>`





## Khanda

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Khanda
include('fontawesome/Solid/Khanda')

' renders the element
Khanda('Khanda', 'Khanda', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Khanda
include('fontawesome/Solid/Khanda')

' renders the element
Khanda('Khanda', 'Khanda', 'an optional tech label', 'an optional description')
@enduml
```

