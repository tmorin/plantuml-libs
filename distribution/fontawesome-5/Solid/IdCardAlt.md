# IdCardAlt


```text
fontawesome-5/Solid/IdCardAlt
```

```text
include('fontawesome-5/Solid/IdCardAlt')
```



| Illustration | IdCardAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/IdCardAlt.png) | ![illustration for IdCardAlt](../../fontawesome-5/Solid/IdCardAlt.Local.png) |




## IdCardAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element IdCardAlt
include('fontawesome-5/Solid/IdCardAlt')

' renders the element
IdCardAlt('IdCardAlt', 'Id Card Alt', 'an optional tech label')
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

' loads the Item which embeds the element IdCardAlt
include('fontawesome-5/Solid/IdCardAlt')

' renders the element
IdCardAlt('IdCardAlt', 'Id Card Alt', 'an optional tech label')
@enduml
```

