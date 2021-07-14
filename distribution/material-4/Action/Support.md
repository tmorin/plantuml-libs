# Support


```text
material-4/Action/Support
```

```text
include('material-4/Action/Support')
```



| Illustration | Support |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Support.png) | ![illustration for Support](../../material-4/Action/Support.Local.png) |




## Support

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Support
include('material-4/Action/Support')

' renders the element
Support('Support', 'Support', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Support
include('material-4/Action/Support')

' renders the element
Support('Support', 'Support', 'an optional tech label')
@enduml
```

