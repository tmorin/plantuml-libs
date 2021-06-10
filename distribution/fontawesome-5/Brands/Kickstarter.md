# Kickstarter


```text
fontawesome-5/Brands/Kickstarter
```

```text
include('fontawesome-5/Brands/Kickstarter')
```



| Illustration | Kickstarter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Kickstarter.png) | ![illustration for Kickstarter](../../fontawesome-5/Brands/Kickstarter.Local.png) |




## Kickstarter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Kickstarter
include('fontawesome-5/Brands/Kickstarter')

' renders the element
Kickstarter('Kickstarter', 'Kickstarter', 'an optional tech label')
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

' loads the Item which embeds the element Kickstarter
include('fontawesome-5/Brands/Kickstarter')

' renders the element
Kickstarter('Kickstarter', 'Kickstarter', 'an optional tech label')
@enduml
```

