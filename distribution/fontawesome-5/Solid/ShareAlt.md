# ShareAlt


```text
fontawesome-5/Solid/ShareAlt
```

```text
include('fontawesome-5/Solid/ShareAlt')
```



| Illustration | ShareAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ShareAlt.png) | ![illustration for ShareAlt](../../fontawesome-5/Solid/ShareAlt.Local.png) |




## ShareAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ShareAlt
include('fontawesome-5/Solid/ShareAlt')

' renders the element
ShareAlt('ShareAlt', 'Share Alt', 'an optional tech label')
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

' loads the Item which embeds the element ShareAlt
include('fontawesome-5/Solid/ShareAlt')

' renders the element
ShareAlt('ShareAlt', 'Share Alt', 'an optional tech label')
@enduml
```

