# _5Mp


```text
material-4/Image/_5Mp
```

```text
include('material-4/Image/_5Mp')
```



| Illustration | _5Mp |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/_5Mp.png) | ![illustration for _5Mp](../../material-4/Image/_5Mp.Local.png) |




## _5Mp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element _5Mp
include('material-4/Image/_5Mp')

' renders the element
_5Mp('5mp', '5mp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element _5Mp
include('material-4/Image/_5Mp')

' renders the element
_5Mp('5mp', '5mp', 'an optional tech label', 'an optional description')
@enduml
```

