# Sign


```text
fontawesome-5/Solid/Sign
```

```text
include('fontawesome-5/Solid/Sign')
```



| Illustration | Sign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Sign.png) | ![illustration for Sign](../../fontawesome-5/Solid/Sign.Local.png) |




## Sign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Sign
include('fontawesome-5/Solid/Sign')

' renders the element
Sign('Sign', 'Sign', 'an optional tech label')
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

' loads the Item which embeds the element Sign
include('fontawesome-5/Solid/Sign')

' renders the element
Sign('Sign', 'Sign', 'an optional tech label')
@enduml
```

