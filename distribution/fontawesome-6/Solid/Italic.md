# Italic


```text
fontawesome-6/Solid/Italic
```

```text
include('fontawesome-6/Solid/Italic')
```



| Illustration | Italic |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Italic.png) | ![illustration for Italic](../../fontawesome-6/Solid/Italic.Local.png) |




## Italic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Italic
include('fontawesome-6/Solid/Italic')

' renders the element
Italic('Italic', 'Italic', 'an optional tech label')
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

' loads the Item which embeds the element Italic
include('fontawesome-6/Solid/Italic')

' renders the element
Italic('Italic', 'Italic', 'an optional tech label')
@enduml
```

