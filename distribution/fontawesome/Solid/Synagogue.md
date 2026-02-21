# Synagogue


```text
fontawesome/Solid/Synagogue
```

```text
include('fontawesome/Solid/Synagogue')
```



| Illustration | Synagogue |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Synagogue.png) | ![illustration for Synagogue](../../fontawesome/Solid/Synagogue.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SynagogueXs>`
- `<$SynagogueSm>`
- `<$SynagogueMd>`
- `<$SynagogueLg>`





## Synagogue

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Synagogue
include('fontawesome/Solid/Synagogue')

' renders the element
Synagogue('Synagogue', 'Synagogue', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Synagogue
include('fontawesome/Solid/Synagogue')

' renders the element
Synagogue('Synagogue', 'Synagogue', 'an optional tech label', 'an optional description')
@enduml
```

