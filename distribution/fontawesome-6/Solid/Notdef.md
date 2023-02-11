# Notdef


```text
fontawesome-6/Solid/Notdef
```

```text
include('fontawesome-6/Solid/Notdef')
```



| Illustration | Notdef |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Notdef.png) | ![illustration for Notdef](../../fontawesome-6/Solid/Notdef.Local.png) |




## Notdef

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Notdef
include('fontawesome-6/Solid/Notdef')

' renders the element
Notdef('Notdef', 'Notdef', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Notdef
include('fontawesome-6/Solid/Notdef')

' renders the element
Notdef('Notdef', 'Notdef', 'an optional tech label', 'an optional description')
@enduml
```

