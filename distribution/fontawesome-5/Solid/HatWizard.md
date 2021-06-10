# HatWizard


```text
fontawesome-5/Solid/HatWizard
```

```text
include('fontawesome-5/Solid/HatWizard')
```



| Illustration | HatWizard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/HatWizard.png) | ![illustration for HatWizard](../../fontawesome-5/Solid/HatWizard.Local.png) |




## HatWizard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HatWizard
include('fontawesome-5/Solid/HatWizard')

' renders the element
HatWizard('HatWizard', 'Hat Wizard', 'an optional tech label')
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

' loads the Item which embeds the element HatWizard
include('fontawesome-5/Solid/HatWizard')

' renders the element
HatWizard('HatWizard', 'Hat Wizard', 'an optional tech label')
@enduml
```

