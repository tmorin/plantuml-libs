# Italic


```text
fontawesome-5/Solid/Italic
```

```text
include('fontawesome-5/Solid/Italic')
```



| Illustration | Italic |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Italic.png) | ![illustration for Italic](../../fontawesome-5/Solid/Italic.Local.png) |




## Italic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Italic
include('fontawesome-5/Solid/Italic')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Italic
include('fontawesome-5/Solid/Italic')

' renders the element
Italic('Italic', 'Italic', 'an optional tech label')
@enduml
```

