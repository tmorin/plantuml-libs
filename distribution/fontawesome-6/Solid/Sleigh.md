# Sleigh


```text
fontawesome-6/Solid/Sleigh
```

```text
include('fontawesome-6/Solid/Sleigh')
```



| Illustration | Sleigh |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Sleigh.png) | ![illustration for Sleigh](../../fontawesome-6/Solid/Sleigh.Local.png) |




## Sleigh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Sleigh
include('fontawesome-6/Solid/Sleigh')

' renders the element
Sleigh('Sleigh', 'Sleigh', 'an optional tech label')
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

' loads the Item which embeds the element Sleigh
include('fontawesome-6/Solid/Sleigh')

' renders the element
Sleigh('Sleigh', 'Sleigh', 'an optional tech label')
@enduml
```

