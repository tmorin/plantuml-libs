# Bars


```text
fontawesome-6/Solid/Bars
```

```text
include('fontawesome-6/Solid/Bars')
```



| Illustration | Bars |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Bars.png) | ![illustration for Bars](../../fontawesome-6/Solid/Bars.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BarsXs>`
- `<$BarsSm>`
- `<$BarsMd>`
- `<$BarsLg>`





## Bars

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Bars
include('fontawesome-6/Solid/Bars')

' renders the element
Bars('Bars', 'Bars', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bars
include('fontawesome-6/Solid/Bars')

' renders the element
Bars('Bars', 'Bars', 'an optional tech label', 'an optional description')
@enduml
```

