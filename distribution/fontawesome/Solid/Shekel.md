# Shekel


```text
fontawesome/Solid/Shekel
```

```text
include('fontawesome/Solid/Shekel')
```



| Illustration | Shekel |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Shekel.png) | ![illustration for Shekel](../../fontawesome/Solid/Shekel.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShekelXs>`
- `<$ShekelSm>`
- `<$ShekelMd>`
- `<$ShekelLg>`





## Shekel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Shekel
include('fontawesome/Solid/Shekel')

' renders the element
Shekel('Shekel', 'Shekel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Shekel
include('fontawesome/Solid/Shekel')

' renders the element
Shekel('Shekel', 'Shekel', 'an optional tech label', 'an optional description')
@enduml
```

