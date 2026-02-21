# Jedi


```text
fontawesome/Solid/Jedi
```

```text
include('fontawesome/Solid/Jedi')
```



| Illustration | Jedi |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Jedi.png) | ![illustration for Jedi](../../fontawesome/Solid/Jedi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JediXs>`
- `<$JediSm>`
- `<$JediMd>`
- `<$JediLg>`





## Jedi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Jedi
include('fontawesome/Solid/Jedi')

' renders the element
Jedi('Jedi', 'Jedi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Jedi
include('fontawesome/Solid/Jedi')

' renders the element
Jedi('Jedi', 'Jedi', 'an optional tech label', 'an optional description')
@enduml
```

