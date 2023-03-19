# Khanda


```text
fontawesome-6/Solid/Khanda
```

```text
include('fontawesome-6/Solid/Khanda')
```



| Illustration | Khanda |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Khanda.png) | ![illustration for Khanda](../../fontawesome-6/Solid/Khanda.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Khanda
include('fontawesome-6/Solid/Khanda')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Khanda
include('fontawesome-6/Solid/Khanda')

' renders the element
Khanda('Khanda', 'Khanda', 'an optional tech label', 'an optional description')
@enduml
```

