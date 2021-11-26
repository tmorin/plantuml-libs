# ObjectGroup


```text
fontawesome-5/Regular/ObjectGroup
```

```text
include('fontawesome-5/Regular/ObjectGroup')
```



| Illustration | ObjectGroup |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/ObjectGroup.png) | ![illustration for ObjectGroup](../../fontawesome-5/Regular/ObjectGroup.Local.png) |




## ObjectGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ObjectGroup
include('fontawesome-5/Regular/ObjectGroup')

' renders the element
ObjectGroup('ObjectGroup', 'Object Group', 'an optional tech label')
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

' loads the Item which embeds the element ObjectGroup
include('fontawesome-5/Regular/ObjectGroup')

' renders the element
ObjectGroup('ObjectGroup', 'Object Group', 'an optional tech label')
@enduml
```

