# SignHanging


```text
fontawesome-6/Solid/SignHanging
```

```text
include('fontawesome-6/Solid/SignHanging')
```



| Illustration | SignHanging |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SignHanging.png) | ![illustration for SignHanging](../../fontawesome-6/Solid/SignHanging.Local.png) |




## SignHanging

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SignHanging
include('fontawesome-6/Solid/SignHanging')

' renders the element
SignHanging('SignHanging', 'Sign Hanging', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SignHanging
include('fontawesome-6/Solid/SignHanging')

' renders the element
SignHanging('SignHanging', 'Sign Hanging', 'an optional tech label', 'an optional description')
@enduml
```

