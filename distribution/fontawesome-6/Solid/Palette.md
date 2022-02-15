# Palette


```text
fontawesome-6/Solid/Palette
```

```text
include('fontawesome-6/Solid/Palette')
```



| Illustration | Palette |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Palette.png) | ![illustration for Palette](../../fontawesome-6/Solid/Palette.Local.png) |




## Palette

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Palette
include('fontawesome-6/Solid/Palette')

' renders the element
Palette('Palette', 'Palette', 'an optional tech label')
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

' loads the Item which embeds the element Palette
include('fontawesome-6/Solid/Palette')

' renders the element
Palette('Palette', 'Palette', 'an optional tech label')
@enduml
```

