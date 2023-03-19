# HatWizard


```text
fontawesome-6/Solid/HatWizard
```

```text
include('fontawesome-6/Solid/HatWizard')
```



| Illustration | HatWizard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HatWizard.png) | ![illustration for HatWizard](../../fontawesome-6/Solid/HatWizard.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HatWizardXs>`
- `<$HatWizardSm>`
- `<$HatWizardMd>`
- `<$HatWizardLg>`





## HatWizard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HatWizard
include('fontawesome-6/Solid/HatWizard')

' renders the element
HatWizard('HatWizard', 'Hat Wizard', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HatWizard
include('fontawesome-6/Solid/HatWizard')

' renders the element
HatWizard('HatWizard', 'Hat Wizard', 'an optional tech label', 'an optional description')
@enduml
```

