# Stamp


```text
fontawesome-5/Solid/Stamp
```

```text
include('fontawesome-5/Solid/Stamp')
```



| Illustration | Stamp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Stamp.png) | ![illustration for Stamp](../../fontawesome-5/Solid/Stamp.Local.png) |




## Stamp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Stamp
include('fontawesome-5/Solid/Stamp')

' renders the element
Stamp('Stamp', 'Stamp', 'an optional tech label')
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

' loads the Item which embeds the element Stamp
include('fontawesome-5/Solid/Stamp')

' renders the element
Stamp('Stamp', 'Stamp', 'an optional tech label')
@enduml
```

