# Eraser


```text
fontawesome-5/Solid/Eraser
```

```text
include('fontawesome-5/Solid/Eraser')
```



| Illustration | Eraser |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Eraser.png) | ![illustration for Eraser](../../fontawesome-5/Solid/Eraser.Local.png) |




## Eraser

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Eraser
include('fontawesome-5/Solid/Eraser')

' renders the element
Eraser('Eraser', 'Eraser', 'an optional tech label')
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

' loads the Item which embeds the element Eraser
include('fontawesome-5/Solid/Eraser')

' renders the element
Eraser('Eraser', 'Eraser', 'an optional tech label')
@enduml
```

