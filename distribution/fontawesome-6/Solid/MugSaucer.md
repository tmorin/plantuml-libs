# MugSaucer


```text
fontawesome-6/Solid/MugSaucer
```

```text
include('fontawesome-6/Solid/MugSaucer')
```



| Illustration | MugSaucer |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MugSaucer.png) | ![illustration for MugSaucer](../../fontawesome-6/Solid/MugSaucer.Local.png) |




## MugSaucer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MugSaucer
include('fontawesome-6/Solid/MugSaucer')

' renders the element
MugSaucer('MugSaucer', 'Mug Saucer', 'an optional tech label')
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

' loads the Item which embeds the element MugSaucer
include('fontawesome-6/Solid/MugSaucer')

' renders the element
MugSaucer('MugSaucer', 'Mug Saucer', 'an optional tech label')
@enduml
```

