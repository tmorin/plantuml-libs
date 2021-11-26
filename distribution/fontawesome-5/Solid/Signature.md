# Signature


```text
fontawesome-5/Solid/Signature
```

```text
include('fontawesome-5/Solid/Signature')
```



| Illustration | Signature |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Signature.png) | ![illustration for Signature](../../fontawesome-5/Solid/Signature.Local.png) |




## Signature

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Signature
include('fontawesome-5/Solid/Signature')

' renders the element
Signature('Signature', 'Signature', 'an optional tech label')
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

' loads the Item which embeds the element Signature
include('fontawesome-5/Solid/Signature')

' renders the element
Signature('Signature', 'Signature', 'an optional tech label')
@enduml
```

