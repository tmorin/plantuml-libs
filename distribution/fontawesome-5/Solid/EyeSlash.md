# EyeSlash


```text
fontawesome-5/Solid/EyeSlash
```

```text
include('fontawesome-5/Solid/EyeSlash')
```



| Illustration | EyeSlash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/EyeSlash.png) | ![illustration for EyeSlash](../../fontawesome-5/Solid/EyeSlash.Local.png) |




## EyeSlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element EyeSlash
include('fontawesome-5/Solid/EyeSlash')

' renders the element
EyeSlash('EyeSlash', 'Eye Slash', 'an optional tech label')
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

' loads the Item which embeds the element EyeSlash
include('fontawesome-5/Solid/EyeSlash')

' renders the element
EyeSlash('EyeSlash', 'Eye Slash', 'an optional tech label')
@enduml
```

