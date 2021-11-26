# Flushed


```text
fontawesome-5/Regular/Flushed
```

```text
include('fontawesome-5/Regular/Flushed')
```



| Illustration | Flushed |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/Flushed.png) | ![illustration for Flushed](../../fontawesome-5/Regular/Flushed.Local.png) |




## Flushed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Flushed
include('fontawesome-5/Regular/Flushed')

' renders the element
Flushed('Flushed', 'Flushed', 'an optional tech label')
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

' loads the Item which embeds the element Flushed
include('fontawesome-5/Regular/Flushed')

' renders the element
Flushed('Flushed', 'Flushed', 'an optional tech label')
@enduml
```

