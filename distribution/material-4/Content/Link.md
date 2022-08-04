# Link


```text
material-4/Content/Link
```

```text
include('material-4/Content/Link')
```



| Illustration | Link |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/Link.png) | ![illustration for Link](../../material-4/Content/Link.Local.png) |




## Link

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Link
include('material-4/Content/Link')

' renders the element
Link('Link', 'Link', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Link
include('material-4/Content/Link')

' renders the element
Link('Link', 'Link', 'an optional tech label', 'an optional description')
@enduml
```

