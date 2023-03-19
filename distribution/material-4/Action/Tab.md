# Tab


```text
material-4/Action/Tab
```

```text
include('material-4/Action/Tab')
```



| Illustration | Tab |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Tab.png) | ![illustration for Tab](../../material-4/Action/Tab.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TabXs>`
- `<$TabSm>`
- `<$TabMd>`
- `<$TabLg>`





## Tab

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Tab
include('material-4/Action/Tab')

' renders the element
Tab('Tab', 'Tab', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tab
include('material-4/Action/Tab')

' renders the element
Tab('Tab', 'Tab', 'an optional tech label', 'an optional description')
@enduml
```

