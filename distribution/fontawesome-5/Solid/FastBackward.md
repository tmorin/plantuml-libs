# FastBackward


```text
fontawesome-5/Solid/FastBackward
```

```text
include('fontawesome-5/Solid/FastBackward')
```



| Illustration | FastBackward |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/FastBackward.png) | ![illustration for FastBackward](../../fontawesome-5/Solid/FastBackward.Local.png) |




## FastBackward

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FastBackward
include('fontawesome-5/Solid/FastBackward')

' renders the element
FastBackward('FastBackward', 'Fast Backward', 'an optional tech label')
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

' loads the Item which embeds the element FastBackward
include('fontawesome-5/Solid/FastBackward')

' renders the element
FastBackward('FastBackward', 'Fast Backward', 'an optional tech label')
@enduml
```

