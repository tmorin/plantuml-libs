# Microscope


```text
fontawesome/Solid/Microscope
```

```text
include('fontawesome/Solid/Microscope')
```



| Illustration | Microscope |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Microscope.png) | ![illustration for Microscope](../../fontawesome/Solid/Microscope.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MicroscopeXs>`
- `<$MicroscopeSm>`
- `<$MicroscopeMd>`
- `<$MicroscopeLg>`





## Microscope

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Microscope
include('fontawesome/Solid/Microscope')

' renders the element
Microscope('Microscope', 'Microscope', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Microscope
include('fontawesome/Solid/Microscope')

' renders the element
Microscope('Microscope', 'Microscope', 'an optional tech label', 'an optional description')
@enduml
```

