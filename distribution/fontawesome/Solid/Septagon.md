# Septagon


```text
fontawesome/Solid/Septagon
```

```text
include('fontawesome/Solid/Septagon')
```



| Illustration | Septagon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Septagon.png) | ![illustration for Septagon](../../fontawesome/Solid/Septagon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SeptagonXs>`
- `<$SeptagonSm>`
- `<$SeptagonMd>`
- `<$SeptagonLg>`





## Septagon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Septagon
include('fontawesome/Solid/Septagon')

' renders the element
Septagon('Septagon', 'Septagon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Septagon
include('fontawesome/Solid/Septagon')

' renders the element
Septagon('Septagon', 'Septagon', 'an optional tech label', 'an optional description')
@enduml
```

