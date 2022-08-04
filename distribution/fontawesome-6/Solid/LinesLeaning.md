# LinesLeaning


```text
fontawesome-6/Solid/LinesLeaning
```

```text
include('fontawesome-6/Solid/LinesLeaning')
```



| Illustration | LinesLeaning |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/LinesLeaning.png) | ![illustration for LinesLeaning](../../fontawesome-6/Solid/LinesLeaning.Local.png) |




## LinesLeaning

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element LinesLeaning
include('fontawesome-6/Solid/LinesLeaning')

' renders the element
LinesLeaning('LinesLeaning', 'Lines Leaning', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LinesLeaning
include('fontawesome-6/Solid/LinesLeaning')

' renders the element
LinesLeaning('LinesLeaning', 'Lines Leaning', 'an optional tech label', 'an optional description')
@enduml
```

