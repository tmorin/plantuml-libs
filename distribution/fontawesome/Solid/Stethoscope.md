# Stethoscope


```text
fontawesome/Solid/Stethoscope
```

```text
include('fontawesome/Solid/Stethoscope')
```



| Illustration | Stethoscope |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Stethoscope.png) | ![illustration for Stethoscope](../../fontawesome/Solid/Stethoscope.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StethoscopeXs>`
- `<$StethoscopeSm>`
- `<$StethoscopeMd>`
- `<$StethoscopeLg>`





## Stethoscope

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Stethoscope
include('fontawesome/Solid/Stethoscope')

' renders the element
Stethoscope('Stethoscope', 'Stethoscope', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Stethoscope
include('fontawesome/Solid/Stethoscope')

' renders the element
Stethoscope('Stethoscope', 'Stethoscope', 'an optional tech label', 'an optional description')
@enduml
```

