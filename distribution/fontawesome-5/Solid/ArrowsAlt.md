# ArrowsAlt


```text
fontawesome-5/Solid/ArrowsAlt
```

```text
include('fontawesome-5/Solid/ArrowsAlt')
```



| Illustration | ArrowsAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ArrowsAlt.png) | ![illustration for ArrowsAlt](../../fontawesome-5/Solid/ArrowsAlt.Local.png) |




## ArrowsAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ArrowsAlt
include('fontawesome-5/Solid/ArrowsAlt')

' renders the element
ArrowsAlt('ArrowsAlt', 'Arrows Alt', 'an optional tech label')
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

' loads the Item which embeds the element ArrowsAlt
include('fontawesome-5/Solid/ArrowsAlt')

' renders the element
ArrowsAlt('ArrowsAlt', 'Arrows Alt', 'an optional tech label')
@enduml
```

