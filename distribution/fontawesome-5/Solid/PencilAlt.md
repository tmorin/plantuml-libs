# PencilAlt


```text
fontawesome-5/Solid/PencilAlt
```

```text
include('fontawesome-5/Solid/PencilAlt')
```



| Illustration | PencilAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/PencilAlt.png) | ![illustration for PencilAlt](../../fontawesome-5/Solid/PencilAlt.Local.png) |




## PencilAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PencilAlt
include('fontawesome-5/Solid/PencilAlt')

' renders the element
PencilAlt('PencilAlt', 'Pencil Alt', 'an optional tech label')
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

' loads the Item which embeds the element PencilAlt
include('fontawesome-5/Solid/PencilAlt')

' renders the element
PencilAlt('PencilAlt', 'Pencil Alt', 'an optional tech label')
@enduml
```

