# Escalator


```text
material/Places/Escalator
```

```text
include('material/Places/Escalator')
```



| Illustration | Escalator |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/Escalator.png) | ![illustration for Escalator](../../material/Places/Escalator.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EscalatorXs>`
- `<$EscalatorSm>`
- `<$EscalatorMd>`
- `<$EscalatorLg>`





## Escalator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Escalator
include('material/Places/Escalator')

' renders the element
Escalator('Escalator', 'Escalator', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Escalator
include('material/Places/Escalator')

' renders the element
Escalator('Escalator', 'Escalator', 'an optional tech label', 'an optional description')
@enduml
```

