# Key


```text
fontawesome-5/Solid/Key
```

```text
include('fontawesome-5/Solid/Key')
```



| Illustration | Key |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Key.png) | ![illustration for Key](../../fontawesome-5/Solid/Key.Local.png) |




## Key

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Key
include('fontawesome-5/Solid/Key')

' renders the element
Key('Key', 'Key', 'an optional tech label')
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

' loads the Item which embeds the element Key
include('fontawesome-5/Solid/Key')

' renders the element
Key('Key', 'Key', 'an optional tech label')
@enduml
```

