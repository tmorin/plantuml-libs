# Glasses


```text
fontawesome-5/Solid/Glasses
```

```text
include('fontawesome-5/Solid/Glasses')
```



| Illustration | Glasses |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Glasses.png) | ![illustration for Glasses](../../fontawesome-5/Solid/Glasses.Local.png) |




## Glasses

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Glasses
include('fontawesome-5/Solid/Glasses')

' renders the element
Glasses('Glasses', 'Glasses', 'an optional tech label')
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

' loads the Item which embeds the element Glasses
include('fontawesome-5/Solid/Glasses')

' renders the element
Glasses('Glasses', 'Glasses', 'an optional tech label')
@enduml
```

