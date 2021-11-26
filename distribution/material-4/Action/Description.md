# Description


```text
material-4/Action/Description
```

```text
include('material-4/Action/Description')
```



| Illustration | Description |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Description.png) | ![illustration for Description](../../material-4/Action/Description.Local.png) |




## Description

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Description
include('material-4/Action/Description')

' renders the element
Description('Description', 'Description', 'an optional tech label')
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

' loads the Item which embeds the element Description
include('material-4/Action/Description')

' renders the element
Description('Description', 'Description', 'an optional tech label')
@enduml
```

