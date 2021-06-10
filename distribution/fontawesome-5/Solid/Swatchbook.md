# Swatchbook


```text
fontawesome-5/Solid/Swatchbook
```

```text
include('fontawesome-5/Solid/Swatchbook')
```



| Illustration | Swatchbook |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Swatchbook.png) | ![illustration for Swatchbook](../../fontawesome-5/Solid/Swatchbook.Local.png) |




## Swatchbook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Swatchbook
include('fontawesome-5/Solid/Swatchbook')

' renders the element
Swatchbook('Swatchbook', 'Swatchbook', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Swatchbook
include('fontawesome-5/Solid/Swatchbook')

' renders the element
Swatchbook('Swatchbook', 'Swatchbook', 'an optional tech label')
@enduml
```

