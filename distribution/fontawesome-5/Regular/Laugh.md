# Laugh


```text
fontawesome-5/Regular/Laugh
```

```text
include('fontawesome-5/Regular/Laugh')
```



| Illustration | Laugh |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/Laugh.png) | ![illustration for Laugh](../../fontawesome-5/Regular/Laugh.Local.png) |




## Laugh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Laugh
include('fontawesome-5/Regular/Laugh')

' renders the element
Laugh('Laugh', 'Laugh', 'an optional tech label')
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

' loads the Item which embeds the element Laugh
include('fontawesome-5/Regular/Laugh')

' renders the element
Laugh('Laugh', 'Laugh', 'an optional tech label')
@enduml
```

