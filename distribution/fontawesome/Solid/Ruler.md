# Ruler


```text
fontawesome/Solid/Ruler
```

```text
include('fontawesome/Solid/Ruler')
```



| Illustration | Ruler |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Ruler.png) | ![illustration for Ruler](../../fontawesome/Solid/Ruler.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RulerXs>`
- `<$RulerSm>`
- `<$RulerMd>`
- `<$RulerLg>`





## Ruler

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Ruler
include('fontawesome/Solid/Ruler')

' renders the element
Ruler('Ruler', 'Ruler', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ruler
include('fontawesome/Solid/Ruler')

' renders the element
Ruler('Ruler', 'Ruler', 'an optional tech label', 'an optional description')
@enduml
```

