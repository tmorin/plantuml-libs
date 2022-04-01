# Burst


```text
fontawesome-6/Solid/Burst
```

```text
include('fontawesome-6/Solid/Burst')
```



| Illustration | Burst |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Burst.png) | ![illustration for Burst](../../fontawesome-6/Solid/Burst.Local.png) |




## Burst

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Burst
include('fontawesome-6/Solid/Burst')

' renders the element
Burst('Burst', 'Burst', 'an optional tech label')
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

' loads the Item which embeds the element Burst
include('fontawesome-6/Solid/Burst')

' renders the element
Burst('Burst', 'Burst', 'an optional tech label')
@enduml
```

