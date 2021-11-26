# MehRollingEyes


```text
fontawesome-5/Regular/MehRollingEyes
```

```text
include('fontawesome-5/Regular/MehRollingEyes')
```



| Illustration | MehRollingEyes |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/MehRollingEyes.png) | ![illustration for MehRollingEyes](../../fontawesome-5/Regular/MehRollingEyes.Local.png) |




## MehRollingEyes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element MehRollingEyes
include('fontawesome-5/Regular/MehRollingEyes')

' renders the element
MehRollingEyes('MehRollingEyes', 'Meh Rolling Eyes', 'an optional tech label')
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

' loads the Item which embeds the element MehRollingEyes
include('fontawesome-5/Regular/MehRollingEyes')

' renders the element
MehRollingEyes('MehRollingEyes', 'Meh Rolling Eyes', 'an optional tech label')
@enduml
```

