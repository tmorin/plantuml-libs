# ArrowRightAlt


```text
material-4/Action/ArrowRightAlt
```

```text
include('material-4/Action/ArrowRightAlt')
```



| Illustration | ArrowRightAlt |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/ArrowRightAlt.png) | ![illustration for ArrowRightAlt](../../material-4/Action/ArrowRightAlt.Local.png) |




## ArrowRightAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ArrowRightAlt
include('material-4/Action/ArrowRightAlt')

' renders the element
ArrowRightAlt('ArrowRightAlt', 'Arrow Right Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowRightAlt
include('material-4/Action/ArrowRightAlt')

' renders the element
ArrowRightAlt('ArrowRightAlt', 'Arrow Right Alt', 'an optional tech label', 'an optional description')
@enduml
```

