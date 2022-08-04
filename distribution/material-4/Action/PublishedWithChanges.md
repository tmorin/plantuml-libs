# PublishedWithChanges


```text
material-4/Action/PublishedWithChanges
```

```text
include('material-4/Action/PublishedWithChanges')
```



| Illustration | PublishedWithChanges |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/PublishedWithChanges.png) | ![illustration for PublishedWithChanges](../../material-4/Action/PublishedWithChanges.Local.png) |




## PublishedWithChanges

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PublishedWithChanges
include('material-4/Action/PublishedWithChanges')

' renders the element
PublishedWithChanges('PublishedWithChanges', 'Published With Changes', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PublishedWithChanges
include('material-4/Action/PublishedWithChanges')

' renders the element
PublishedWithChanges('PublishedWithChanges', 'Published With Changes', 'an optional tech label', 'an optional description')
@enduml
```

