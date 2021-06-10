# FirstAid


```text
fontawesome-5/Solid/FirstAid
```

```text
include('fontawesome-5/Solid/FirstAid')
```



| Illustration | FirstAid |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/FirstAid.png) | ![illustration for FirstAid](../../fontawesome-5/Solid/FirstAid.Local.png) |




## FirstAid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FirstAid
include('fontawesome-5/Solid/FirstAid')

' renders the element
FirstAid('FirstAid', 'First Aid', 'an optional tech label')
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

' loads the Item which embeds the element FirstAid
include('fontawesome-5/Solid/FirstAid')

' renders the element
FirstAid('FirstAid', 'First Aid', 'an optional tech label')
@enduml
```

